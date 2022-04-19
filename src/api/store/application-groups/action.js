import { createAction } from "redux-actions";

export const getApplicationGroups = createAction("GET_APPLICATION_GROUPS");
export const getApplicationGroupsSuccess = createAction(
  "GET_APPLICATION_GROUPS_SUCCESS"
);
export const getApplicationGroupsError = createAction(
  "GET_APPLICATION_GROUPS_ERROR"
);
