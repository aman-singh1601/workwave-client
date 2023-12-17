import { put, takeLatest } from "redux-saga/effects";
import { LOGIN_USER, AUTH_FAILURE, AUTH_SUCCESS, SIGNUP_USER } from "./actionTypes";

function* signupSaga(action) {
    try {
        console.log(action)
    //   yield put({ type: AUTH_SUCCESS, payload: action.payload });

    } catch (error) {
      yield put({ type: AUTH_FAILURE, payload: error.message });
    }
  }

  function* loginSaga(action) {
    try {
        console.log(action)
    //   yield put({ type: AUTH_SUCCESS, payload: action.payload });

    } catch (error) {
      yield put({ type: AUTH_FAILURE, payload: error.message });
    }
  }
  function* authSaga(){
    yield takeLatest(SIGNUP_USER, signupSaga);
    yield takeLatest(LOGIN_USER, loginSaga);
}

export default authSaga