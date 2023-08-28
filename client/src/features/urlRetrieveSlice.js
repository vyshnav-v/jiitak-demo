import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  urls: [],
  retrieveLoading: false,
  retrieveError: null,
};

const retrieveSlice = createSlice({
  name: "retrieve",
  initialState,
  reducers: {
    retrieveUrlsReq: (state) => {
      state.retrieveLoading = true;
      state.retrieveError = null;
    },
    retrieveUrlsSuccess: (state, action) => {
      state.retrieveLoading = false;
      state.urls = action.payload;
    },
    retrieveUrlsFail: (state, action) => {
      state.retrieveLoading = false;
      state.retrieveError = action.payload;
    },
  },
});

export const { retrieveUrlsReq, retrieveUrlsSuccess, retrieveUrlsFail } =
  retrieveSlice.actions;

export default retrieveSlice.reducer;
