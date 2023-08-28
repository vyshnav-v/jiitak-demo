import { configureStore } from "@reduxjs/toolkit";
import UserSigninReducer from "../features/userSignInSlice";
import UserSignupReducer from "../features/userSignUpSlice";
import UrlShortenReducer from '../features/urlShortenerSlice';
import RetrieveUrlsReducer from "../features/urlRetrieveSlice";
export const store = configureStore({
  reducer: {
    userSignin: UserSigninReducer,
    userSignup: UserSignupReducer,
    urlShortener: UrlShortenReducer,
    retrieveUrls: RetrieveUrlsReducer,
  },
});