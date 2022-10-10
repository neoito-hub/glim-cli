"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootSaga = void 0;
const effects_1 = require("redux-saga/effects");
const auth_saga_1 = require("../sagas/auth.saga");
function* rootSaga() {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    yield (0, effects_1.all)([(0, auth_saga_1.authSaga)()]);
}
exports.rootSaga = rootSaga;
