import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shortUrl: null,
  shortenerLoading: false,
  shortenerError: null,
};

const shortenSlice = createSlice({
  name: "shorten",
  initialState,
  reducers: {
    shortenUrlReq: (state) => {
      state.shortenerLoading = true;
      state.shortenerError = null;
    },
    shortenUrlSuccess: (state, action) => {
      state.shortenerLoading = false;
      state.shortUrl = action.payload;
    },
    shortenUrlFail: (state, action) => {
      state.shortenerLoading = false;
      state.shortenerError = action.payload;
    },
  },
});

export const { shortenUrlReq, shortenUrlSuccess, shortenUrlFail } =
  shortenSlice.actions;

export default shortenSlice.reducer;
