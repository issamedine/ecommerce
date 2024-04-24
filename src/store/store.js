// store.js
import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./basketSlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
  devTools: true, // Enable Redux DevTools extension
});