// cartSlice.js
import { fetchApi } from "@/services";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const basketReducer = createSlice({
  name: "basket",
  initialState: {
    basket: [],
  },
  reducers: {
    addToBasket: (state, action) => {
      state.basket.push(action.payload);
    },

  },
});

export const { addToBasket } = basketReducer.actions;
export default basketReducer.reducer;