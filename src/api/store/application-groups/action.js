import { createAction } from "redux-actions";

export const getApplicationGroups = createAction("GET_APPLICATION_GROUPS");
export const getApplicationGroupsSucceeded = createAction(
  "GET_APPLICATION_GROUPS_SUCCEEDED"
);
export const getApplicationGroupsFailed = createAction(
  "GET_APPLICATION_GROUPS_FAILED"
);
