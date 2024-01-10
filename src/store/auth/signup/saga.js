import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { LOGIN_USER, AUTH_FAILURE, AUTH_SUCCESS, SIGNUP_USER } from "./actionTypes";
import { postFakeRegister } from "../../../helpers/backend_helper";

import showNotification from "../../../components/Common/showNotification";



function* signupSaga({payload: { user, history }}) {
    try {

    const response = yield call(postFakeRegister,user);

    showNotification(response.message, 'success');

    localStorage.setItem("authUser", JSON.stringify(response.user_data));
    localStorage.setItem("token", response.token);
    
    //forwarding to dashboard
    history('/');
    
    } catch (error) {
     showNotification("SignUp Unsuccessfull", "error");
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