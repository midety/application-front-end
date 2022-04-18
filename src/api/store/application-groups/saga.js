import { takeLatest, call, put } from "redux-saga/effects";
import {
  getApplicationGroups,
  getApplicationGroupsSucceeded,
  getApplicationGroupsFailed,
} from "./action";
import { getApplicationGroupsApi } from "../../rest-api";

export function* getApplicationGroupsSaga() {
  const { response, error } = yield call(getApplicationGroupsApi);
  if (response) {
    yield put(getApplicationGroupsSucceeded(response.data));
  } else {
    yield put(getApplicationGroupsFailed(error));
  }
}

export function* getApplicationGroupsError(error) {
  console.log(error.payload);
}

export default function* applicationGroupsManagerSaga() {
  yield takeLatest(getApplicationGroups, getApplicationGroupsSaga);
  yield takeLatest(getApplicationGroupsFailed, getApplicationGroupsError);
}
