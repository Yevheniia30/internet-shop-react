import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  posts: [],
};

const toolkitSlice = createSlice({
  name: "toolkit",
  initialState,

  reducers: {
    increment(state) {
      state.count = state.count + 1;
    },
    decrement(state) {
      state.count = state.count - 1;
    },

    getPostsReq(state, { payload }) {
      state.posts = payload;
    },

    addPostReq(state, { payload }) {
      state.posts.push(payload);
    },
  },
});

export default toolkitSlice.reducer;
export const { increment, decrement, getPostsReq, addPostReq } =
  toolkitSlice.actions;
