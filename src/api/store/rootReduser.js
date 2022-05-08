import { combineReducers } from "redux";
import groupsReducer from "./application-groups/reducer";

export default combineReducers({
  groups: groupsReducer,
});
