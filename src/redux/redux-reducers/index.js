import { combineReducers } from "@reduxjs/toolkit";

import userReducer from "../redux-slices/userSlice";
import profileReducer from "../redux-slices/profileSlice";
import filterReducer from "../redux-slices/filterSlice";
export default combineReducers({
  user: userReducer,
  profile: profileReducer,
  filters:filterReducer
});
