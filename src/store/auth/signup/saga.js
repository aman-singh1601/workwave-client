import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { LOGIN_USER, AUTH_FAILURE, AUTH_SUCCESS, SIGNUP_USER } from "./actionTypes";
import { loginuser, postFakeRegister } from "../../../helpers/backend_helper";

import showNotification from "../../../components/Common/showNotification";
import { USER_LOGIN } from "../../../helpers/url_helper";



function* signupSaga({payload: { user, history }}) {
    try {
    const response = yield call(postFakeRegister,user);

    showNotification("SignUp Successful", 'success');

    localStorage.setItem("authUser", JSON.stringify(response.user_data));
    localStorage.setItem("token", response.token);
    
    //forwarding to dashboard
    history('/');
    
    } catch (error) {
     showNotification(error.response.data.detail, "error");
    }
  }

  function* loginSaga({payload: { user, history }}) {
    try {
      const response = yield call(loginuser, user);
  
      showNotification(response.message, 'success');
  
      localStorage.setItem("authUser", JSON.stringify(response.user_data));
      localStorage.setItem("token", response.token);
      
      //forwarding to dashboard
      history('/');
      
      } catch (error) {
        showNotification(error.response.data.detail, "error");
      }
  }
  function* authSaga(){
    yield takeEvery(SIGNUP_USER, signupSaga);
    yield takeLatest(LOGIN_USER, loginSaga);
}

export default authSaga