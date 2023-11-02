import { createSlice } from "@reduxjs/toolkit";

const generateUniqueCardId = (cards) => {
  const cIds = cards.map(el => el.cardId);
  const getNum = () => Array.from({ length: 16 }, () => Math.floor(Math.random() * 10))
    .map((digit, index) => (index > 0 && index % 4 === 0 ? " " + digit : digit))
    .join("");
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
          statement: 0.000,
          cardType: 'visa',
          userId: {cryptoUUID},
          nameCard: '',
          cvv: ''
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
        userId: action.payload.userId,
        nameCard: action.payload.nameCard,
        cvv: Array.from({length: 3}, () => Math.floor(Math.random() * 10))
      });
    },
    changeCardName(state, action) {
      const cardsUser = state.cards.filter(c => c.cardId === action.payload.cardId);
      if (cardsUser.length === 1) {
        state.cards[state.cards.indexOf(cardsUser[0])].nameCard = action.payload.name;
      }
    },
    deleteCard(state, action) {
      state.cards = state.cards.filter(c => c.cardId === action.payload.cardId && c.userId === action.payload.userId);
    },
    transfer(state, action) {
      const fromCardId = state.cards.indexOf(state.cards.filter(el => el.cardId === action.payload.fromId)[0]);
      const toCardId = state.cards.indexOf(state.cards.filter(el => el.cardId === action.payload.toId)[0]);
      const transfCount = action.payload.sum;
      state.cards[fromCardId].statement -= transfCount;
      state.cards[toCardId].statement += transfCount;
    },
    insertNewMoney(state, action) {
      const сardId = state.cards.indexOf(state.cards.filter(el => el.cardId === action.payload.cardId)[0]);
      state.cards[сardId].statement += action.payload.value;
    }
  }
});

export const { addCard, changeCardName, deleteCard, transfer, insertNewMoney } = settingsSlice.actions;
export default settingsSlice.reducer
