import { all, fork } from "redux-saga/effects";

import signupSaga from "./auth/signup/saga"
import workspaceSaga from "./workspace/saga"

function* rootSaga() {
    yield all([
      //public

     fork(signupSaga),
     fork(workspaceSaga),
     
    ]);
  }

  export default rootSaga