import { AUTH_FAILURE, AUTH_SUCCESS, SIGNUP_USER } from "./actionTypes"

export const signupUser = (user, history) => {
    return {
        type: SIGNUP_USER,
        payload: {user, history},
    }
  }

  export const signupSuccess = user => {
    return {
        type: AUTH_SUCCESS,
        payload: user,
    }
  }

  export const signupFailure = error => {
   return{ 
        type: AUTH_FAILURE,
        payload: error,
    }
  }