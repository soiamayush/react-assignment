import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    error: null,
    searchData: [],
    loggedIn: false, // Added loggedIn state
  },

  reducers: {
    searchUser: (state, action) => {
      state.searchData = action.payload;
    },
    setLoggedIn: (state, action) => {
      state.loggedIn = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { searchUser, setLoggedIn } = userSlice.actions;
