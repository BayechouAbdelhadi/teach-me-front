import { configureStore } from "@reduxjs/toolkit";

import RootReducer from "../redux-reducers";

export default configureStore({
  reducer: RootReducer,
});