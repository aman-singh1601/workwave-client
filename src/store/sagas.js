import { all, fork } from "redux-saga/effects";
import signupSaga from "./auth/signup/saga"
function* rootSaga() {
    yield all([
      //public

     fork(signupSaga),
     
    ]);
  }

  export default rootSaga