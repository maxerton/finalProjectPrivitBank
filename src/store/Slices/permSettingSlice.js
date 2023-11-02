import { createSlice } from "@reduxjs/toolkit";

const settingsSlice = createSlice({
  name: 'permSettings',
  initialState: {
    currentUser: null,
    selectLanguage: 'ua'
  },
  reducers: {
    changeLanguage(state, action) {
      state.selectLanguage = action.payload;
    },
    logIn(state, action) {
      state.currentUser = action.payload.user;
    },
    logOut(state) {
      state.currentUser = null
    }
  }
});

export const { changeLanguage, logIn, logOut } = settingsSlice.actions;
export default settingsSlice.reducer
