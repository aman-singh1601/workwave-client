import { AUTH_SUCCESS, AUTH_FAILURE } from "./actionTypes";

const INIT = {
  user: null,
  signInSuccess: false,
  signInFail: null,
};

const signup = (state = INIT, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      state = {
        ...state,
      };
      break;
    case AUTH_FAILURE:
      state = {
        ...state,
      };
      break;
    default:
      state = { ...state };
      break;
  }
  return state;
};

export default signup;
