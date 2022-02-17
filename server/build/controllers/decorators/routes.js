"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patch = exports.del = exports.put = exports.post = exports.get = void 0;
require("reflect-metadata");
const Methods_1 = require("./Methods");
const MetaDataKeys_1 = require("./MetaDataKeys");
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
