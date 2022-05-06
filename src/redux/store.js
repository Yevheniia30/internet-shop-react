import { configureStore } from "@reduxjs/toolkit";
// import toolkitReducer from "./toolkitReducer";
import toolkitSlice from "./toolkit/toolkitSlice";
import authSlice from "./auth/auth-slice";

// const rootReducer = combineReducers({
//   toolkit: toolkitSlice,
// });

export const store = configureStore({
  reducer: {
    toolkit: toolkitSlice,
    auth: authSlice,
  },
  //   middleware: {},
  //   devTools: {},
});
