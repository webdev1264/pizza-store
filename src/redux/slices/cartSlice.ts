import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { isItemEqual } from "../../utils/itemsHelpers";
import { RootState } from "../store";
import { getDataFromLS } from "../../utils/getDataFromLS";

export type CartItem = {
  id: string;
  title: string;
  price: number;
  size: number;
  type: string;
  count: number;
  imageUrl: string;
};

interface CartSliceState {
  items: CartItem[];
}

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
      return initialState;
    },
  },
});

export const selectCart = (state: RootState) => state.cart.items;

export const { setCart, addToCart, removeFromCart, removeOneItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
