import { all } from "redux-saga/effects";
import applicationGroups from "./application-groups/saga";

export default function* rootSaga() {
  yield all([applicationGroups()]);
}
