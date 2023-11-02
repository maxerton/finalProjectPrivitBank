import { createSlice } from "@reduxjs/toolkit";

const historySlice = createSlice({
  name: 'history',
  initialState: {
    history: [
      /*{
        fromCard: '6666 6666 6666 6666',
        fromUserId: 'uuid',
        date: date,
        value: 4.66,
        currency: 'UAH',
        toUser: 'uuid',
        toCard: '8888 8888 8888 8888'
      }*/
    ]
  },
  reducers: {
    addOperation(state, action) {
      state.history.push({
        fromCard: action.payload.fromCard,
        fromUserId: action.payload.fromUserId,
        date: new Date(),
        value: action.payload.value,
        currency: action.payload.currency,
        toUser: action.payload.toUser,
        toCard: action.payload.toCard
      });
    }
  }
});

export const { addOperation } = historySlice.actions;
export default historySlice.reducer
