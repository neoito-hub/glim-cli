"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This file imports configuration objects from either the config.dev.js file
 * or the config.prod.js file depending on whether we are in __DEV__ or not.
 *
 * Note that we do not gitignore these files. Unlike on web servers, just because
 * these are not checked into your repo doesn't mean that they are secure.
 * In fact, you're shipping a JavaScript bundle with every
 * config variable in plain text. Anyone who downloads your app can easily
 * extract them.
 *
 * If you doubt this, just bundle your app, and then go look at the bundle and
 * search it for one of your config variable values. You'll find it there.
 *
 * Read more here: https://reactnative.dev/docs/security#storing-sensitive-info
 */
const config_base_1 = __importDefault(require("./config.base"));
const config_prod_1 = __importDefault(require("./config.prod"));
const config_dev_1 = __importDefault(require("./config.dev"));
let ExtraConfig = config_prod_1.default;
if (__DEV__) {
    ExtraConfig = config_dev_1.default;
}
const Config = Object.assign(Object.assign({}, config_base_1.default), ExtraConfig);
exports.default = Config;
