
import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
  name: "user",
  initialState: {
        studentProfile:{

        },
        teacherProfile:{
            activePage:"informations"

        }
  },
  reducers: {
    setTeacherProfileActivePage: (state, action) => {
      state.teacherProfile.activePage = action.payload;
    },
  },
});

//+ generated action creator functions :return an object with payload and type
export const { 
    setTeacherProfileActivePage
} = profileSlice.actions;

export const selectUser = (state) => state.user;

// + the generated reducer function
export default profileSlice.reducer;
