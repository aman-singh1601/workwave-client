import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { CREATE_WORKSPACE, DELETE_WORKSPACE, GET_WORKSPACE, GET_WORKSPACES, UPDATE_WORKSPACE } from "./actionTypes";

function* createWorkSpace({payload: {data, navigate}}){};

function* deleteWorkSpace({payload: {workSpaceId, navigate}}){};

function* updateWorkSpace({payload: {workSpaceId, data, navigate}}){};

function* getWorkSpaces({payload: {navigate}}){};

function* getWorkSpace({payload: {workSpaceId, navigate}}){};


function* authSaga() {
    yield takeEvery(CREATE_WORKSPACE, createWorkSpace);
    yield takeEvery(UPDATE_WORKSPACE, updateWorkSpace);
    yield takeEvery(DELETE_WORKSPACE, deleteWorkSpace);
    yield takeEvery(GET_WORKSPACE, getWorkSpace);
    yield takeEvery(GET_WORKSPACES, getWorkSpaces);
}

export default authSaga;