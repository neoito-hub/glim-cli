"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authSaga = void 0;
const effects_1 = require("redux-saga/effects");
function* login(action) { }
function* sendOtp(action) { }
function* loginOtp(action) { }
function* registerUser(action) { }
function* registerDealer(action) { }
function* registerWithOtp(action) { }
function* authSaga() {
    yield (0, effects_1.takeEvery)("auth/login", login);
    yield (0, effects_1.takeEvery)("auth/sendOtp", sendOtp);
    yield (0, effects_1.takeEvery)("auth/loginOtp", loginOtp);
    yield (0, effects_1.takeEvery)("auth/registerUser", registerUser);
    yield (0, effects_1.takeEvery)("auth/registerDealer", registerDealer);
    yield (0, effects_1.takeEvery)("auth/registerWithOtp", registerWithOtp);
}
exports.authSaga = authSaga;
