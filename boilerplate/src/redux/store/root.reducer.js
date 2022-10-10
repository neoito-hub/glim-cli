"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootReducer = void 0;
const redux_1 = require("redux");
const auth_slice_1 = require("../slices/auth.slice");
exports.rootReducer = (0, redux_1.combineReducers)({
    auth: auth_slice_1.authSlice.reducer
});
