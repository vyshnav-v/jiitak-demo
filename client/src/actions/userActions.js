import axiosConfig from "../config/axios";
 // Make sure to import the correct actions from your slice
import { userSignupFail, userSignupReq, userSignupSuccess } from "../features/userSignUpSlice.js";
import {

    userLoginFail,
    userLoginReq,
  userLoginSuccess,
  userLogout,
} from "../features/userSignInSlice.js";
export const signIn = (logEmail, logPassword) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    dispatch(userLoginReq()); // Dispatch the action indicating the login request has started
    // Send the login request
    const { data } = await axiosConfig.post(
      `/login`,
      {
        email: logEmail,
        password: logPassword,
      },
      config
    );
    dispatch(userLoginSuccess(data)); // Dispatch the action with user data on successful login
    localStorage.setItem("userInfo", JSON.stringify(data)); // Store user data in local storage
  } catch (error) {
    const errorIs =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch(userLoginFail(errorIs)); // Dispatch the action with error message on login failure
  }
};


export const Signup =
  (username, email, password ) => async (dispatch) => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      dispatch(userSignupReq()); // Dispatch the action indicating signup request

    const { data } = await axiosConfig.post(
      `/register`,
      {
        username,
        email,
        password,
        
      },
      config
    );

      dispatch(userSignupSuccess(data)); // Dispatch the action with user data on successful signup
    //   dispatch(userLoginSuccess(data)); // Dispatch the action with user data to simulate auto-login
    //   localStorage.setItem("userInfo", JSON.stringify(data)); // Store user data in local storage
    } catch (error) {
      const errorIs =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;

      dispatch(userSignupFail(errorIs)); // Dispatch the action with error message on signup failure
    }
  };

  export const logout = () => async (dispatch) => {
    localStorage.removeItem("userInfo"); // Remove user data from local storage
    dispatch(userLogout()); // Dispatch the action to clear user info from the state
  };

