"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = exports.bodyValidator = exports.use = exports.patch = exports.del = exports.put = exports.post = exports.get = void 0;
const AppRouter_1 = require("../AppRouter");
require("reflect-metadata");
const Methods_1 = require("./decorators/Methods");
const MetaDataKeys_1 = require("./decorators/MetaDataKeys");
function routeBinder(method) {
    return function (path) {
        return function (target, key, desk) {
            Reflect.defineMetadata(MetaDataKeys_1.MetaDataKeys.PATH, path, target, key);
            Reflect.defineMetadata(MetaDataKeys_1.MetaDataKeys.METHOD, method, target, key);
        };
    };
}
exports.get = routeBinder(Methods_1.Methods.GET);
exports.post = routeBinder(Methods_1.Methods.POST);
exports.put = routeBinder(Methods_1.Methods.PUT);
exports.del = routeBinder(Methods_1.Methods.DEL);
exports.patch = routeBinder(Methods_1.Methods.PATCH);
require("reflect-metadata");
function use(middleware) {
    return function (target, key, desk) {
        const middlewares = Reflect.getMetadata(MetaDataKeys_1.MetaDataKeys.MIDDLEWARE, target, key) || [];
        Reflect.defineMetadata(MetaDataKeys_1.MetaDataKeys.MIDDLEWARE, [...middlewares, middleware], target, key);
    };
}
exports.use = use;
function bodyValidator(...keys) {
    return function (target, key, desk) {
        Reflect.defineMetadata(MetaDataKeys_1.MetaDataKeys.VALIDATOR, keys, target, key);
    };
}
exports.bodyValidator = bodyValidator;
function bodyValidators(keys) {
    return function (req, res, next) {
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
function controller(routePrefix) {
    return function (target) {
        const router = AppRouter_1.AppRouter.getInstance();
        for (let key in target.prototype) {
            const routeHandler = target.prototype[key];
            const path = Reflect.getMetadata(MetaDataKeys_1.MetaDataKeys.PATH, target.prototype, key);
            const method = Reflect.getMetadata(MetaDataKeys_1.MetaDataKeys.METHOD, target.prototype, key);
            const middlewares = Reflect.getMetadata(MetaDataKeys_1.MetaDataKeys.MIDDLEWARE, target.prototype, key) ||
                [];
            const requiredBodyProps = Reflect.getMetadata(MetaDataKeys_1.MetaDataKeys.VALIDATOR, target.prototype, key) ||
                [];
            const validator = bodyValidators(requiredBodyProps);
            if (path) {
                router[method](`${routePrefix}${path}`, ...middlewares, validator, routeHandler);
            }
        }
    };
}
exports.controller = controller;
function logger(req, res, next) {
    console.log('Request');
    next();
}
let LoginController = class LoginController {
    getLogin(req, res) {
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
    postLogin(req, res) {
        const { email, password } = req.body;
        if (email &&
            password &&
            email === 'myemeil@gmail.com' &&
            password === 'password') {
            req.session = { loggedIn: true };
            res.redirect('/');
        }
        else {
            res.send('Invalid email or password');
        }
    }
    getLogout(req, res) {
        req.session = undefined;
        res.redirect('/');
    }
};
__decorate([
    (0, exports.get)('/login'),
    use(logger),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], LoginController.prototype, "getLogin", null);
__decorate([
    (0, exports.post)('/login'),
    bodyValidator('email', 'password'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], LoginController.prototype, "postLogin", null);
__decorate([
    (0, exports.get)('/logout'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], LoginController.prototype, "getLogout", null);
LoginController = __decorate([
    controller('/auth')
], LoginController);
