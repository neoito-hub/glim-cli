import { all } from 'redux-saga/effects'

import { authSaga } from '../sagas/auth.saga'

function* rootSaga() {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  yield all([authSaga()])
}

export { rootSaga }
