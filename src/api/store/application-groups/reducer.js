import { handleActions } from "redux-actions";
import { getApplicationGroupsSucceeded } from "./action";

const DEFAULT_STATE = {
  groups: [],
};

const handlers = {
  [getApplicationGroupsSucceeded]: (state, action) => {
    const groups = action.payload;

    return { ...state, groups };
  },
};

export default handleActions(handlers, DEFAULT_STATE);
