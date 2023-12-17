import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

import { API_ERROR, LOGIN_FAILURE, LOGIN_SUCCESS, LOGIN_USER, LOGOUT_USER, LOGOUT_USER_SUCCESS, SIGNUP_FAILURE, SIGNUP_SUCCESS, SIGNUP_USER, SOCIAL_LOGIN } from "./actionTypes";
import { loginFailure, loginSuccess, loginUser, signupFailure, signupUser, signupSuccess } from "./actions";
import { fakeLogin } from "./authService";

function* loginSaga(action) {
    try{
        // const user = yield call(fakeLogin,action.payload.username, action.payload.password)
        console.log("first:",action.payload)
        yield put({type:LOGIN_SUCCESS,payload:action.payload})
        
    }
    catch{
        console.log(action)
        yield put({type:LOGIN_FAILURE,payload:action.payload.error})
    }
}

function* signupSaga(action) {
    try {
    //   const user = yield call(
    //     fakeSignup,
    //     action.payload.username,
    //     action.payload.password,
    //     action.payload.email
    //   );
      yield put({ type: SIGNUP_SUCCESS, payload: user });
    } catch (error) {
      yield put({ type: SIGNUP_FAILURE, payload: error.message });
    }
  }

function* authSaga(){
    yield takeLatest(LOGIN_USER, loginSaga);
    yield takeLatest(SIGNUP_USER, signupSaga);
}

export default authSaga