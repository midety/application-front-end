import { takeLatest, call, put } from "redux-saga/effects";

import {
  getApplicationGroups,
  getApplicationGroupsSucceeded,
  getApplicationGroupsFailed,
} from "./action";

import { getApplicationGroupsApi } from "../../rest-api";

export function* getApplicationGroupsSaga() {
  try {
    const groups = yield call(getApplicationGroupsApi);

    yield put(getApplicationGroupsSucceeded(groups));
  } catch (err) {
    yield put(getApplicationGroupsFailed(err));
  }
}

export default function* applicationGroupsManagerSaga() {
  yield takeLatest(getApplicationGroups, getApplicationGroupsSaga);
}
