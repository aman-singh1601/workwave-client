import { put, takeLatest } from "redux-saga/effects";
import { SIGNUP_FAILURE, SIGNUP_SUCCESS, SIGNUP_USER } from "./actionTypes";

function* signupSaga(action) {
    try {
        console.log(action)
    //   yield put({ type: SIGNUP_SUCCESS, payload: action.payload });

    } catch (error) {
      yield put({ type: SIGNUP_FAILURE, payload: error.message });
    }
  }

  function* authSaga(){
    yield takeLatest(SIGNUP_USER, signupSaga);
}

export default authSaga