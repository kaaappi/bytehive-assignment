import authSaga from "./authSaga";
import { all } from "@redux-saga/core/effects";

function* rootSaga() {
  yield all([...authSaga]);
}

export default rootSaga;
