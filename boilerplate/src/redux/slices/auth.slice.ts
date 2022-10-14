import { createSlice } from '@reduxjs/toolkit'

interface InitialState {
  logginedUser:
    | {
        email: string
        email_verified: boolean
        name: string
        sub: string
      }
    | undefined
}
const initialState: InitialState = {
  logginedUser: undefined
}

const authSlice = createSlice({
  initialState,
  name: 'auth',
  reducers: {}
})

export { authSlice }
