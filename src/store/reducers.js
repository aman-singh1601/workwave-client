import { combineReducers } from "redux";

import signup from "./auth/signup/reducer";
import workspace from "./workspace/reducer";

const rootReducer = combineReducers({
    signup,
    workspace
})

export default rootReducer;