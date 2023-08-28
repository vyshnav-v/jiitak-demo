import { createSlice } from "@reduxjs/toolkit";

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  loginLoading: false,
  userInfo: userInfoFromStorage, // Store user info from local storage
  loginError: null,
};

const UserSigninSlice = createSlice({
  name: "UserSignin",
  initialState: initialState,
  reducers: {
    userLoginReq: (state, action) => {
      state.loginLoading = true;
    },
    userLoginSuccess: (state, action) => {
      state.loginLoading = false;
      state.userInfo = action.payload;
    },
    userLoginFail: (state, action) => {
      state.loginLoading = false;
      state.loginError = action.payload;
    },
    userLogout: (state, action) => {
      state.userInfo = null; // Clear user info on logout
      state.loginError = null;
    },
  },
});

export const { userLoginReq, userLoginSuccess, userLoginFail, userLogout } =
  UserSigninSlice.actions;

export default UserSigninSlice.reducer;
