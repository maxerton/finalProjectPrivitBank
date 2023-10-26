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
    }
  }
});

export const { changeLanguage } = settingsSlice.actions;
export default settingsSlice.reducer
