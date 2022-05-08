import { takeLatest, call, put } from "redux-saga/effects";
import { getApplicationGroupsApi } from "../../rest-api";
import {
  getApplicationGroupsSuccess,
  getApplicationGroupsRequest,
  getApplicationGroupsError,
} from "./reducer";

export function* getApplicationGroupsSaga() {
  const { response, error } = yield call(getApplicationGroupsApi);
  if (response) {
    console.log(23);
    yield put(getApplicationGroupsSuccess(response.data));
  } else {
    yield put(getApplicationGroupsError(error));
  }
}

// eslint-disable-next-line require-yield
export function* getApplicationGroupsErrorSaga(error) {
  console.log(error.payload);
}

export default function* applicationGroupsManagerSaga() {
  yield takeLatest(getApplicationGroupsRequest, getApplicationGroupsSaga);
  yield takeLatest(getApplicationGroupsError, getApplicationGroupsErrorSaga);
}
