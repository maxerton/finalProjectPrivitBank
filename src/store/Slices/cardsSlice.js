import { createSlice } from "@reduxjs/toolkit";

const generateUniqueCardId = (cards) => {
  const cIds = cards.map(el => el.cardId);
  const getNum = () => (new Array(4).map(() => (new Array(4).map(() => Math.floor(Math.random() * 10).toString())).join(''))).join(' ');
  let newId = `${getNum()}`;
  while (cIds.includes(newId)) {
    newId = `${getNum()}`;
  }
  return newId;
}

const settingsSlice = createSlice({
  name: 'cards',
  initialState: {
    cards: [
      /*
        {
          cardId: '8756 8932 3455 6655',
          lastMonth: 12,
          lastYear: 28,
          statement: 0.000
          userId: {cryptoUUID},
        }
      */
    ]
  },
  reducers: {
    addCard(state, action) {
      const date10year = new Date();
      date10year.setFullYear(date10year.getFullYear() + 10);
      state.cards.push({
        cardId: generateUniqueCardId(state.cards),
        lastMonth: date10year.getMonth(),
        lastYear: date10year.getFullYear(),
        statement: 0,
        userId: action.payload.userId
      });
    }
  }
});

export const { openMenu, closeMenu } = settingsSlice.actions;
export default settingsSlice.reducer
