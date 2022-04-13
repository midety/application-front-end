import { all } from "redux-saga/effects";
import groups from "./application-groups/saga";

function* rootSaga() {
  yield all([groups()]);
}

export default rootSaga;
