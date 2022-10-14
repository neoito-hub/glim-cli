import { takeEvery, call, put, select } from "redux-saga/effects";

function* login(action: any) {}

function* sendOtp(action: any) {}

function* loginOtp(action: any) {}

function* registerUser(action: any) {}

function* registerDealer(action: any) {}

function* registerWithOtp(action: any) {}

export function* authSaga() {
  yield takeEvery("auth/login", login);
  yield takeEvery("auth/sendOtp", sendOtp);
  yield takeEvery("auth/loginOtp", loginOtp);
  yield takeEvery("auth/registerUser", registerUser);
  yield takeEvery("auth/registerDealer", registerDealer);
  yield takeEvery("auth/registerWithOtp", registerWithOtp);
}
