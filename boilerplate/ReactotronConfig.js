"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const async_storage_1 = __importDefault(require("@react-native-async-storage/async-storage"));
// eslint-disable-next-line import/no-extraneous-dependencies
const reactotron_react_native_1 = __importDefault(require("reactotron-react-native"));
(_a = reactotron_react_native_1.default.setAsyncStorageHandler) === null || _a === void 0 ? void 0 : _a.call(reactotron_react_native_1.default, async_storage_1.default).configure().useReactNative({
    storybook: true
}).connect();
// eslint-disable-next-line no-console
console.tron = reactotron_react_native_1.default;
