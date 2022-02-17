import 'reflect-metadata';
import { Methods } from './Methods';
import { MetaDataKeys } from './MetaDataKeys';
import { RequestHandler } from 'express';

interface IRouteHandlerDescriptor extends PropertyDescriptor {
  value?: RequestHandler;
}

function routeBinder(method: string) {
  return function (path: string) {
    return function (target: any, key: string, desk: IRouteHandlerDescriptor) {
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
