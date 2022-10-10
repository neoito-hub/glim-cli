"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const redux_logger_1 = __importDefault(require("redux-logger"));
const redux_saga_1 = __importDefault(require("redux-saga"));
const root_reducer_1 = require("./root.reducer");
const root_saga_1 = require("./root.saga");
const sagaMiddleWare = (0, redux_saga_1.default)();
const middleware = [
    sagaMiddleWare,
    // eslint-disable-next-line deprecation/deprecation
    ...(0, toolkit_1.getDefaultMiddleware)({
        serializableCheck: false
    })
];
if (__DEV__) {
    middleware.push(redux_logger_1.default);
}
const store = (0, toolkit_1.configureStore)({
    devTools: process.env.NODE_ENV !== 'production',
    middleware,
    reducer: root_reducer_1.rootReducer
});
exports.store = store;
sagaMiddleWare.run(root_saga_1.rootSaga);
