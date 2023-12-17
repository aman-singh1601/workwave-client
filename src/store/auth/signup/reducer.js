import {
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    SIGNUP_USER,
} from "./actionTypes"

const INIT = {
    user: null,
    signInSuccess: false,
    signInFail: null,
}

const signup = (state = INIT, action) => {
    switch (action.type) {
        case SIGNUP_SUCCESS:
            state = {
                ...state,
            }
            break;
        case SIGNUP_FAILURE:
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