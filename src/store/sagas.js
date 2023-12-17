import { all, fork } from "redux-saga/effects";
import authSaga from "./auth/login/saga";

function* rootSaga() {
    yield all([
      //public

      fork(authSaga),
     
    ]);
  }

  export default rootSaga