import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getDataFromLS } from "../../utils/getDataFromLS";
import { isItemEqual } from "../../utils/itemsHelpers";
import { CartItem, CartSliceState } from "./types";

const initialState: CartSliceState = { items: getDataFromLS("cart") };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart(state, action: PayloadAction<CartItem[]>) {
      state.items = action.payload;
    },
    addToCart(state, action: PayloadAction<CartItem>) {
      const itemInCart = state.items.find((item) => isItemEqual(item, action.payload));
      if (itemInCart) {
        itemInCart.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
    },
    removeFromCart(state, action: PayloadAction<CartItem>) {
      state.items = state.items.filter((item) => !isItemEqual(item, action.payload));
    },
    removeOneItem(state, action: PayloadAction<CartItem>) {
      if (action.payload.count <= 1) {
        state.items = state.items.filter((item) => !isItemEqual(item, action.payload));
        return;
      }
      const itemInCart = state.items.find((item) => isItemEqual(item, action.payload));
      if (itemInCart) {
        itemInCart.count--;
      }
    },
    clearCart() {
      return { items: [] };
    },
  },
});

export const { setCart, addToCart, removeFromCart, removeOneItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
