import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import isItemEqual from "../../utils/isItemEqual";

const initialState = [
  {
    id: 7,
    title: "Маргарита",
    price: 450,
    qty: 2,
    size: 26,
    type: "тонкое",
  },
  {
    id: 7,
    title: "Маргарита",
    price: 450,
    qty: 1,
    size: 30,
    type: "тонкое",
  },
];
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemInCart = state.find((item) => {
        return isItemEqual(item, action.payload);
      });
      if (itemInCart) {
        return state.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item,
        );
      }
      state.push(action.payload);
    },
    removeFromCart(state, action) {
      return state.filter((item) => !isItemEqual(item, action.payload));
    },
    addOneItem(state, action) {
      return state.map((item) =>
        isItemEqual(item, action.payload) ? { ...item, qty: item.qty + 1 } : item,
      );
    },
    removeOneItem(state, action) {
      return state.map((item) =>
        isItemEqual(item, action.payload) ? { ...item, qty: item.qty - 1 } : item,
      );
    },
    clearCart() {
      return [];
    },
  },
});

export const useCart = () => useSelector((state) => state.cart);

export const { addToCart, removeFromCart, addOneItem, removeOneItem, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
