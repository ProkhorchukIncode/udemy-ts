"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.use = void 0;
const MetaDataKeys_1 = require("./MetaDataKeys");
require("reflect-metadata");
function use(middleware) {
    return function (target, key, desk) {
        const middlewares = Reflect.getMetadata(MetaDataKeys_1.MetaDataKeys.MIDDLEWARE, target, key) || [];
        Reflect.defineMetadata(MetaDataKeys_1.MetaDataKeys.MIDDLEWARE, [...middlewares, middleware], target, key);
    };
}
exports.use = use;
