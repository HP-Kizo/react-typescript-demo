// store.ts
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import userReducer from "./usersSlice";
import bankReducer from "./bankSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    bank: bankReducer,
    // Add other reducers here
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
