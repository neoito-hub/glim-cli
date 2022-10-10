import type { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { regDealer, regUser, regWithOtp } from "src/interfaces/auth.interface";

interface InitialState {
  logginedUser:
    | {
        email: string;
        email_verified: boolean;
        name: string;
        sub: string;
      }
    | undefined;
}
const initialState: InitialState = {
  logginedUser: undefined,
};

type AuthReducer<Payload> = CaseReducer<InitialState, PayloadAction<Payload>>;

const login: AuthReducer<{ password: string; username: string }> = (state) =>
  state;

const sendOtp: AuthReducer<{ phone: number }> = (state) => state;

const loginOtp: AuthReducer<{ otp: number; id: string }> = (state) => state;

const registerUser: AuthReducer<regUser> = (state) => state;

const registerDealer: AuthReducer<regDealer> = (state) => state;

const registerWithOtp: AuthReducer<regWithOtp> = (state) => state;

const authSlice = createSlice({
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

export { authSlice };
