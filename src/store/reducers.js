import { combineReducers } from "redux";

import signup from "./auth/signup/reducer";

const rootReducer = combineReducers({
    signup,
})

export default rootReducer;