import { NextFunction, Request, Response } from 'express';
import { AppRouter } from '../AppRouter';

import 'reflect-metadata';
import { Methods } from './decorators/Methods';
import { MetaDataKeys } from './decorators/MetaDataKeys';

function routeBinder(method: string) {
  return function (path: string) {
    return function (target: any, key: string, desk: PropertyDescriptor) {
      Reflect.defineMetadata(MetaDataKeys.PATH, path, target, key);
      Reflect.defineMetadata(MetaDataKeys.METHOD, method, target, key);
    };
  };
}

export const get = routeBinder(Methods.GET);
export const post = routeBinder(Methods.POST);
export const put = routeBinder(Methods.PUT);
export const del = routeBinder(Methods.DEL);
export const patch = routeBinder(Methods.PATCH);

import { RequestHandler } from 'express';
import 'reflect-metadata';

export function use(middleware: RequestHandler) {
  return function (target: any, key: string, desk: PropertyDescriptor) {
    const middlewares =
      Reflect.getMetadata(MetaDataKeys.MIDDLEWARE, target, key) || [];

    Reflect.defineMetadata(
      MetaDataKeys.MIDDLEWARE,
      [...middlewares, middleware],
      target,
      key
    );
  };
}

export function bodyValidator(...keys: string[]) {
  return function (target: any, key: string, desk: PropertyDescriptor) {
    Reflect.defineMetadata(MetaDataKeys.VALIDATOR, keys, target, key);
  };
}

function bodyValidators(keys: string): RequestHandler {
  return function (req: Request, res: Response, next: NextFunction) {
    if (!req.body) {
      res.status(422).send('Invalid request');
      return;
    }

    for (let key of keys) {
      if (!req.body[key]) {
        res.status(422).send(`Missing property ${key}`);
        return;
      }
    }

    next();
  };
}

export function controller(routePrefix: string) {
  return function (target: Function) {
    const router = AppRouter.getInstance();

    for (let key in target.prototype) {
      const routeHandler = target.prototype[key];
      const path = Reflect.getMetadata(
        MetaDataKeys.PATH,
        target.prototype,
        key
      );
      const method: Methods = Reflect.getMetadata(
        MetaDataKeys.METHOD,
        target.prototype,
        key
      );
      const middlewares =
        Reflect.getMetadata(MetaDataKeys.MIDDLEWARE, target.prototype, key) ||
        [];

      const requiredBodyProps =
        Reflect.getMetadata(MetaDataKeys.VALIDATOR, target.prototype, key) ||
        [];

      const validator = bodyValidators(requiredBodyProps);

      if (path) {
        router[method](
          `${routePrefix}${path}`,
          ...middlewares,
          validator,
          routeHandler
        );
      }
    }
  };
}

function logger(req: Request, res: Response, next: NextFunction) {
  console.log('Request');
  next();
}

@controller('/auth')
class LoginController {
  @get('/login')
  @use(logger)
  getLogin(req: Request, res: Response): void {
    res.send(`
      <form method="POST">
        <div>
          <label>Email</label>
          <input name="email"/>
        </div>
        <div>
          <label>Password</label>
          <input name="password" type="password"/>
        </div>
        <button>Submit</button>
      </form>
    `);
  }

  @post('/login')
  @bodyValidator('email', 'password')
  postLogin(req: Request, res: Response) {
    const { email, password } = req.body;

    if (
      email &&
      password &&
      email === 'myemeil@gmail.com' &&
      password === 'password'
    ) {
      req.session = { loggedIn: true };
      res.redirect('/');
    } else {
      res.send('Invalid email or password');
    }
  }

  @get('/logout')
  getLogout(req: Request, res: Response) {
    req.session = undefined;
    res.redirect('/');
  }
}
