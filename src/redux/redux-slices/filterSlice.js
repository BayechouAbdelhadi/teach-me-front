
import { createSlice } from "@reduxjs/toolkit";
// const getToken=()=>{
//   return localStorage.getItem("access_token")!==null?true:false;
// }
export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    radius:30,
    maxPrice:150
  },
  reducers: {
    setMaxPrice: (state, action) => {
      state.maxPrice=action.payload;
    },
    setSubject:(state, action) => {
      state.subject=action.payload;
    },
    setRadius:(state, action) => {
      state.radius=action.payload;
    },
  },
});

//+ generated action creator functions :return an object with payload and type
export const { 
  setMaxPrice,
  setSubject,
  setRadius
} = filterSlice.actions;


// + the generated reducer function
export default filterSlice.reducer;
