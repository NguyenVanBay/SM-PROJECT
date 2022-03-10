import { put } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { call, fork, take } from "redux-saga/effects";
import { LoginPayload, authActions } from "./authSlice";
import history from "../../utils/history";
import { alertActions } from "../Alert/alertSlice";

function* handleLogin(payload: LoginPayload) {
  try {
    if ("nguyenvanbay.no1@gmail.com" === payload.email) {
      localStorage.setItem("email", payload.email);
      yield put(
        authActions.loginSuccess({
          id: "1",
          name: "BAYKA",
          email: "bay@gmail.com"
        })
      );
      yield put(
        alertActions.createAlert({
          severity: "success",
          color: "success",
          message: "login success!",
          position: "top",
          timeHidden: 2000
        })
      );
      history.push("/admin");
    } else {
    }
  } catch (error) {
    yield put(authActions.loginFailed());
    yield put(
      alertActions.createAlert({
        severity: "error",
        color: "error",
        message: "login fail!",
        position: "top",
        timeHidden: 2000
      })
    );
    history.push("/login");
  }
}

function* handleLogout() {
  yield localStorage.removeItem("email");
  yield put(
    alertActions.createAlert({
      severity: "success",
      color: "success",
      message: "logout success!",
      position: "top",
      timeHidden: 2000
    })
  );
  history.push("/login");
}

function* watchLoginFlow() {
  while (true) {
    const isLoggedIn = Boolean(localStorage.getItem("email"));

    if (!isLoggedIn) {
      const action: PayloadAction<LoginPayload> = yield take(
        authActions.login.type
      );
      yield fork(handleLogin, action.payload);
    }

    yield take(authActions.logout.type);
    yield call(handleLogout);
  }
}

export default function* authSaga() {
  yield fork(watchLoginFlow);
}
