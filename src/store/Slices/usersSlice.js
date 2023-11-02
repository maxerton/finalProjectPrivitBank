import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [
      {
        login: 'demo',
        password: window.atob('demo'),
        name: 'Demo Demo Demo',
        id: crypto.randomUUID()
      }
    ]
  },
  reducers: {
    addUser(state, action) {
      state.users.push({
        id: crypto.randomUUID(),
        login: action.payload.login,
        password: action.payload.password
      });
      const cb = action.payload.cb;
      const user = state.users[-1];
      cb && setTimeout(() => cb(user), 50);
    }
  }
});

export const { addUser } = usersSlice.actions;
export default usersSlice.reducer
