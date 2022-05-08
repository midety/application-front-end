import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

export const applicationGroupsAdapter = createEntityAdapter({
  selectId: (ApplicationGroup) => ApplicationGroup.id,
});

const applicationGroupsSlice = createSlice({
  name: "Application Groups",
  initialState: applicationGroupsAdapter.getInitialState(),
  reducers: {
    getApplicationGroupsRequest() {},
    getApplicationGroupsSuccess(state, action) {
      applicationGroupsAdapter.addMany(state, action.payload);
    },
    getApplicationGroupsError() {},
  },
});

export const {
  getApplicationGroupsSuccess,
  getApplicationGroupsRequest,
  getApplicationGroupsError,
} = applicationGroupsSlice.actions;

export default applicationGroupsSlice.reducer;
