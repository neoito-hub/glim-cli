"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const app_json_1 = require("./app.json");
const src_1 = __importDefault(require("./src"));
react_native_1.AppRegistry.registerComponent(app_json_1.name, () => src_1.default);
