import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

import { rootReducer } from './root.reducer'
import { rootSaga } from './root.saga'

const sagaMiddleWare = createSagaMiddleware()

const middleware = [
  sagaMiddleWare,
  // eslint-disable-next-line deprecation/deprecation
  ...getDefaultMiddleware({
    serializableCheck: false
  })
]

if (__DEV__) {
  middleware.push(logger)
}

const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  middleware,
  reducer: rootReducer
})

export { store }

sagaMiddleWare.run(rootSaga)
