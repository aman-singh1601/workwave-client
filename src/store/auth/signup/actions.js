import { SIGNUP_FAILURE, SIGNUP_SUCCESS, SIGNUP_USER } from "./actionTypes"

export const signupUser = user => {
    return {
        type: SIGNUP_USER,
        payload: user,
    }
  }

  export const signupSuccess = user => {
    return {
        type: SIGNUP_SUCCESS,
        payload: user,
    }
  }

  export const signupFailure = error => {
   return{ 
        type: SIGNUP_FAILURE,
        payload: error,
    }
  }