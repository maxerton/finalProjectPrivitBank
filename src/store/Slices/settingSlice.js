import { createSlice } from "@reduxjs/toolkit";

const settingsSlice = createSlice({
  name: 'settings',
  initialState: {
    sideMenu: {
      open: false
    },
    dollarState: '36.85638 / 37.38729'
  },
  reducers: {
    openMenu(state, action) {
      state.sideMenu.open = true;
    },
    closeMenu(state, action) {
      state.sideMenu.open = false;
    }
  }
});

export const { openMenu, closeMenu } = settingsSlice.actions;
export default settingsSlice.reducer
