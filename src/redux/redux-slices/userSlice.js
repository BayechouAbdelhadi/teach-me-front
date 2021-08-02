
import { createSlice } from "@reduxjs/toolkit";
// const getToken=()=>{
//   return localStorage.getItem("access_token")!==null?true:false;
// }
export const userSlice = createSlice({
  name: "user",
  initialState: {
        user:{
        },
        validToken:false
       
  },
  reducers: {
    setUser: (state, action) => {
      state.user=action.payload;
    },
    setValidToken: (state, action) => {
      state.validToken=action.payload
    }
  },
});

//+ generated action creator functions :return an object with payload and type
export const { 
    setUser,
    setValidToken
} = userSlice.actions;

export const selectUser = (state) => state.user;

// + the generated reducer function
export default userSlice.reducer;
