import { createSlice } from "@reduxjs/toolkit";

const settingsSlice = createSlice({
  name: 'permSettings',
  initialState: {
    currentUser: null,
    selectLanguage: 'ua', 
    ibans: [
      {num: '583749201684923571', name: "Оплата комунальних послуг", type: 'communal', id: crypto.randomUUID()}
    ]
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
    },
    addNewAgent(state, action) {
      state.ibans.push({
        num: action.payload.num,
        name: action.payload.name,
        type: action.payload.type,
        id: crypto.randomUUID()
      })
    }
  }
});

export const { changeLanguage, logIn, logOut } = settingsSlice.actions;
export default settingsSlice.reducer
