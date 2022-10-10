"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authSlice = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    logginedUser: undefined,
};
const login = (state) => state;
const sendOtp = (state) => state;
const loginOtp = (state) => state;
const registerUser = (state) => state;
const registerDealer = (state) => state;
const registerWithOtp = (state) => state;
const authSlice = (0, toolkit_1.createSlice)({
    initialState,
    name: "auth",
    reducers: {
        login,
        sendOtp,
        loginOtp,
        registerUser,
        registerDealer,
        registerWithOtp,
    },
});
exports.authSlice = authSlice;
