import { createSlice } from "@reduxjs/toolkit";

import { isItemEqual } from "../../utils/itemsHelpers";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemInCart = state.find((item) => isItemEqual(item, action.payload));
      if (itemInCart) {
        itemInCart.count++;
      } else {
        state.push({ ...action.payload, count: 1 });
      }
    },
    removeFromCart(state, action) {
      return state.filter((item) => !isItemEqual(item, action.payload));
    },
    removeOneItem(state, action) {
      if (action.payload.count <= 1) {
        return state.filter((item) => !isItemEqual(item, action.payload));
      }
      const itemInCart = state.find((item) => isItemEqual(item, action.payload));
      if (itemInCart) {
        itemInCart.count--;
      }
    },
    clearCart() {
      return initialState;
    },
  },
});

export const selectCart = (state) => state.cart;

export const { addToCart, removeFromCart, removeOneItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
