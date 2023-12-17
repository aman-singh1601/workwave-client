import { put, takeLatest } from "redux-saga/effects";
import { LOGIN_USER, SIGNUP_FAILURE, SIGNUP_SUCCESS, SIGNUP_USER } from "./actionTypes";

function* signupSaga(action) {
    try {
        console.log(action)
    //   yield put({ type: SIGNUP_SUCCESS, payload: action.payload });

    } catch (error) {
      yield put({ type: SIGNUP_FAILURE, payload: error.message });
    }
  }

  function* loginSaga(action) {
    try {
        console.log(action)
    //   yield put({ type: SIGNUP_SUCCESS, payload: action.payload });

    } catch (error) {
      yield put({ type: SIGNUP_FAILURE, payload: error.message });
    }
  }
  function* authSaga(){
    yield takeLatest(SIGNUP_USER, signupSaga);
    yield takeLatest(LOGIN_USER, loginSaga);
}

export default authSaga