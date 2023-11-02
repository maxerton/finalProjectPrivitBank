import { createSlice } from "@reduxjs/toolkit";

const settingsSlice = createSlice({
  name: 'settings',
  initialState: {
    sideMenu: {
      open: false
    },
    dollarState: '36.85638 / 37.38729',
    preloadStatus: true,
    loginModal: {
      open: false
    },
    generalModal: {
      title: '',
      body: '',
      open: false,
      buttons: [
        {text: '', class: 'btn-default', click: () => {}}
      ]
    }
  },
  reducers: {
    openMenu(state, action) {
      state.sideMenu.open = true;
    },
    closeMenu(state, action) {
      state.sideMenu.open = false;
    },
    loginModalControl(state, action) {
      state.loginModal.open = action.payload
    },
    generalModalControl(state, action) {
      switch (action.payload.type) {
        case 'open':
          state.generalModal.open = true;
          state.generalModal.title = action.payload.title;
          state.generalModal.body = action.payload.body;
          state.generalModal.buttons = action.payload.buttons;
          break;
        case 'close':
          state.generalModal.open = false
          break;
      
        default:
          console.log();
      }
    }
  }
});

export const { openMenu, closeMenu, loginModalControl, generalModalControl } = settingsSlice.actions;
export default settingsSlice.reducer
