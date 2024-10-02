import { delay, put, takeEvery } from "@redux-saga/core/effects";
import {
  APP_LOGIN,
  updateAuthLoading,
  updateAuthUserName,
  updateIsAuthorized,
} from "../actions/authActions";
import { toast } from "react-toastify";
import { updatePopup } from "../actions/popupActions";

const authSaga = [
  takeEvery(APP_LOGIN, handleLogin),
  takeEvery(`${APP_LOGIN}_SUCCESS`, handleLoginSuccess),
  takeEvery(`${APP_LOGIN}_FAIL`, handleLoginFail),
];

function* handleLogin(action: any) {
  yield put(updateAuthLoading({ isLoading: true }));
}

function* handleLoginSuccess(action: any) {
  const { username } = action.payload.data;

  yield put(updateIsAuthorized({ isAuthorized: true }));
  yield put(updateAuthLoading({ isLoading: false }));
  yield put(updateAuthUserName({ username: username }));
  yield put(updatePopup({ status: false }));
  yield toast.success("You have successfully logged into account");
}

function* handleLoginFail(action: any) {
  yield toast.error("Login failed");
  yield put(updateAuthLoading({ isLoading: false }));
  yield put(updateIsAuthorized({ isAuthorized: false }));
}

export default authSaga;
