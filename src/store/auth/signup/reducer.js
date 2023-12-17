import {
    AUTH_SUCCESS,
    AUTH_FAILURE,
    SIGNUP_USER,
} from "./actionTypes"

const INIT = {
    user: null,
    signInSuccess: false,
    signInFail: null,
}

const signup = (state = INIT, action) => {
    switch (action.type) {
        case AUTH_SUCCESS:
            state = {
                ...state,
            }
            break;
        case AUTH_FAILURE:
                state = { 
                    ...state, 
                };
        default:
            state = { ...state }
            break
    }
    return state
}

export default signup