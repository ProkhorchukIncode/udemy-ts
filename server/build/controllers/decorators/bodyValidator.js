"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bodyValidator = void 0;
require("reflect-metadata");
const MetaDataKeys_1 = require("./MetaDataKeys");
function bodyValidator(...keys) {
    return function (target, key, desk) {
        Reflect.defineMetadata(MetaDataKeys_1.MetaDataKeys.VALIDATOR, keys, target, key);
    };
}
exports.bodyValidator = bodyValidator;
