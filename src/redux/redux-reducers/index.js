import { combineReducers } from "@reduxjs/toolkit";

import userReducer from "../redux-slices/userSlice";
import profileReducer from "../redux-slices/profileSlice";
export default combineReducers({
  user: userReducer,
  profile: profileReducer,
});
