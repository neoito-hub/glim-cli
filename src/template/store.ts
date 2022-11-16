const sagaTemplate = (statename: any) => {
  const temp = `
  import { takeEvery, call, put, select } from "redux-saga/effects";

  function* login(action: any) {}
  
  export function* ${statename}Saga() {
    yield takeEvery("auth/login", login);
  }
  
     `;
  return temp;
};

const sliceTemplate = (statename: any) => {
  const temp = `
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
  
  const ${statename}Slice = createSlice({
    initialState,
    name: '${statename}',
    reducers: {}
  })
  
  export { ${statename}Slice }
  
          `;
  return temp;
};

export { sagaTemplate, sliceTemplate };
