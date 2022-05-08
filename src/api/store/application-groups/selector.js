import { applicationGroupsAdapter } from "./reducer";

export const {
  selectAll: selectAllApplicationGroups,
  selectById: selectApplicationGroupsById,
  selectIds: selectApplicationGroupsIds,
} = applicationGroupsAdapter.getSelectors((state) => state.groups);
