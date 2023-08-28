import axiosConfig from "../config/axios";
import { retrieveUrlsFail, retrieveUrlsReq, retrieveUrlsSuccess } from "../features/urlRetrieveSlice";
import { shortenUrlFail, shortenUrlReq, shortenUrlSuccess } from "../features/urlShortenerSlice";
export const shortener = (formData) => async (dispatch, getState) => {
  try {
    // Get the originalUrl value from formData using the key
    const originalUrl = formData.get("originalUrl");
    const userId = formData.get("userId");
    // Get the userInfo from the state
    const {
      userSignin: { userInfo },
    } = getState();

    // Set the headers for the request
    const config = {
      headers: {
        // "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    // Dispatch the shortenUrlReq action
    dispatch(shortenUrlReq());

    // Make a POST request to create a short URL
    const { data } = await axiosConfig.post(
      `/shortener`,
      { originalUrl, userId },
      config
    );

    if (data) {
      // Dispatch the shortenUrlSuccess action if data is returned
      dispatch(shortenUrlSuccess(data));
    }
  } catch (error) {
    // Handle errors and dispatch the shortenUrlFail action
    const errorIs =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch(shortenUrlFail(errorIs));
  }
};



export const retrieveUrls = () => async (dispatch, getState) => {
  try {
    const {
      userSignin: { userInfo },
    } = getState();

    // Set the headers for the request
    const config = {
      headers: {
        // "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    dispatch(retrieveUrlsReq());
    // Perform the retrieval logic, for example using axios
    const retrievedData = await axiosConfig.get(`/url`, config);

    dispatch(retrieveUrlsSuccess(retrievedData));
  } catch (error) {
    // Handle errors and dispatch the shortenUrlFail action
    const errorIs =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch(retrieveUrlsFail(errorIs));
  }
};