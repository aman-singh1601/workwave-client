import {
    LOGIN_USER,
    LOGIN_SUCCESS,
    LOGOUT_USER,
    LOGOUT_USER_SUCCESS,
    API_ERROR,
    SIGNUP_SUCCESS,
    LOGIN_FAILURE,
    SIGNUP_FAILURE,
} from "./actionTypes"

const INIT = {
    userData : null,
    loading: false,
    error:null,
}

const login = (state = INIT, action) => {
    switch (action.type) {
        case LOGIN_USER:
            console.log(action.payload)
            return {...state,loading:true,error:null}
            break
        case LOGIN_SUCCESS:
        case SIGNUP_SUCCESS:
            state = {
                ...state,
                user:action.payload,
                loading:false,
                // isUserLogout:false,
                error:null,
            }
            break
            case LOGIN_FAILURE:
            case SIGNUP_FAILURE:
                state = { 
                    ...state, 
                    loading: false, 
                    error: action.payload 
                };
        case LOGOUT_USER:
            state = {
                ...state 
            }
            break
        case LOGOUT_USER_SUCCESS:
            state = {
                ...state,
                isUserLogout:true,
            }
            break
        case API_ERROR:
            state = { 
                ...state, 
                error: action.payload, 
                loading: false,
                isUserLogout: false, 
            }
            break
        default:
            state = { ...state }
            break
    }
    return state
}

export default login