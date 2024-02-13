import { WORKSPACE_FAIL, WORKSPACE_SUCCESS } from "./actions";

const INIT = {
    workSpace: null,
    workSpaceSuccessMessage: null,
    workSpaceFailMessage: null,
}

const workspace = (state = INIT, action) => {
    switch (action.type) {
        case WORKSPACE_SUCCESS:
            state = {
            ...state,
                workSpaceSuccessMessage: action.payload
            };
            break;
        case WORKSPACE_FAIL:
            state = {
            ...state,
                workSpaceFailMessage: action.payload,
            };
            break;
        default:
            state = {
            ...state,
            };
            break;
    }
    return state;
}

export default workspace;