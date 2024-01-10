import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { LOGIN_USER, AUTH_FAILURE, AUTH_SUCCESS, SIGNUP_USER } from "./actionTypes";
import { postFakeRegister } from "../../../helpers/backend_helper";

function* signupSaga(action) {
    try {
        // console.log(action)
      // yield put({ type: AUTH_SUCCESS, payload: action.payload });
    const response = yield call(postFakeRegister,action.payload);
    console.log(response)


    } catch (error) {
      // console.log(error)
      yield put({ type: AUTH_FAILURE, payload: error });
    }
  }

  function* loginSaga(action) {
    try {
        console.log(action)
      // yield put({ type: AUTH_SUCCESS, payload: action.payload });
      const response = yield call(postFakeRegister,action.payload);
      console.log(response)

    } catch (error) {
      yield put({ type: AUTH_FAILURE, payload: error.message });
    }
  }
  function* authSaga(){
    yield takeEvery(SIGNUP_USER, signupSaga);
    yield takeLatest(LOGIN_USER, loginSaga);
}

export default authSaga