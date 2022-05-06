import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  role: null,
  email: null,

  count: 0,

  posts: [],

  devices: ["tv", "phone", "laptop"],
};

// export const increment = createAction("count/increment");
// export const decrement = createAction("count/decrement");

export const getPostsReq = createAction("posts/getPostsReq");

export default createReducer(initialState, {
  [getPostsReq]: (state, action) => {
    console.log("payload", action.payload);
    state.posts = action.payload;
  },
});

// export default createReducer(initialState, {
//   [increment]: function (state) {
//     state.count = state.count + 1;
//   },
//   [decrement]: function (state) {
//     state.count = state.count - 1;
//   },
// });

// export const addDevice = createAction("devices/addDevice");

// export default createReducer(initialState, {
//   [addDevice]: (state, { payload }) => [...state, payload],
// });

console.log("getPostsReq", getPostsReq);
// console.log("decrement", decrement);
