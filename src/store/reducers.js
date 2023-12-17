import { combineReducers } from "redux";

import login from "./auth/login/reducer";

const rootReducer = combineReducers({
    login,
})

export default rootReducer;