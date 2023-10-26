import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [
      {
        login: 'demo',
        password: 'demo',
        id: crypto.randomUUID()
      }
    ]
  },
  reducers: {
    
  }
});

export const { } = usersSlice.actions;
export default usersSlice.reducer
