import { createSlice } from "@reduxjs/toolkit";

const historySlice = createSlice({
  name: 'history',
  initialState: {
    history: [
      /*{
        from: {
          type: 'user' or 'agent',
          name: '',
          id: ''
        },
        date: date,
        value: 4.66,
        currency: 'UAH',
        comment: '',
        to: {
          type: 'user' or 'agent',
          name: '',
          id: ''
        }
      }*/
    ]
  },
  reducers: {
    addOperation(state, action) {
      state.history.push({
        from: {
          type: action.payload.fromType,
          name: action.payload.fromUserName,
          id: action.payload.fromUserId,
          num: action.payload.fromCardNum
        },
        date: new Date(),
        value: action.payload.value,
        currency: action.payload.currency,
        comment: action.payload.comment,
        to: {
          type: action.payload.toType,
          name: action.payload.toUserName,
          id: action.payload.toUserId,
          num: action.payload.toCardNum
        }
      });
    }
  }
});

export const { addOperation } = historySlice.actions;
export default historySlice.reducer
