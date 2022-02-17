import { MetaDataKeys } from './MetaDataKeys';
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
