"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = void 0;
require("reflect-metadata");
const AppRouter_1 = require("../../AppRouter");
const MetaDataKeys_1 = require("./MetaDataKeys");
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
