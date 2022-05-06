import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: { email: null, id: null },
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    setUser(state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
    },
    removeUser(state) {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUser, removeUser } = authSlice.actions;

export default authSlice.reducer;
