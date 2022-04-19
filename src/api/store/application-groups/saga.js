import { takeLatest, call, put } from "redux-saga/effects";
import {
  getApplicationGroups,
  getApplicationGroupsSuccess,
  getApplicationGroupsError,
} from "./action";
import { getApplicationGroupsApi } from "../../rest-api";

export function* getApplicationGroupsSaga() {
  const { response, error } = yield call(getApplicationGroupsApi);
  if (response) {
    yield put(getApplicationGroupsSuccess(response.data));
  } else {
    yield put(getApplicationGroupsError(error));
  }
}

export function* getApplicationGroupsErrorSaga(error) {
  console.log(error.payload);
}

export default function* applicationGroupsManagerSaga() {
  yield takeLatest(getApplicationGroups, getApplicationGroupsSaga);
  yield takeLatest(getApplicationGroupsError, getApplicationGroupsErrorSaga);
}
