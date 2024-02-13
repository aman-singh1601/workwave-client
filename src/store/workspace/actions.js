import { CREATE_WORKSPACE, DELETE_WORKSPACE, UPDATE_WORKSPACE, GET_WORKSPACE, GET_WORKSPACES } from "./actiontTypes";

export const createWorkSpace = (data, navigate) => {
    return {
        type: CREATE_WORKSPACE,
        payload: {data, navigate},
    }
};

export const deleteWorkSpace = (workSpaceId, navigate) => {
    return {
        type: DELETE_WORKSPACE,
        payload: {workSpaceId, navigate},
    }
};

export const updateWorkSpace = (workSpaceId, data, navigate) => {
    return {
        type: UPDATE_WORKSPACE,
        payload: {workSpaceId, data, navigate},
    }
};

export const getWorkSpace = (workSpaceId, navigate) => {
    return {
        type: GET_WORKSPACE,
        payload: {workSpaceId, navigate},
    }
};

export const getWorkSpaces = (navigate) => {
    return {
        type: GET_WORKSPACES,
        payload: {navigate},
    }
};