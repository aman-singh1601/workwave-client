import {
    LOGIN_USER,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    SIGNUP_USER,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
  } from "./actionTypes"

  export const loginUser = (username,password) => {
    return {
        type: LOGIN_USER,
        payload: {username,password},
    }
  }

  export const loginSuccess = user => {
    return {
        type: LOGIN_SUCCESS,
        payload: user,
    }
  }

  export const loginFailure = error => {
   return{ 
        type: LOGIN_FAILURE,
        payload: error,
    }
  }

  export const signupUser = (username,password,email) => {
    return {
        type: SIGNUP_USER,
        payload: {username,password,email},
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