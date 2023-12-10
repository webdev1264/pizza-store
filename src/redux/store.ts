import { configureStore } from "@reduxjs/toolkit";

import itemsReducer from "./slices/itemsSlice";
import filterReducer from "./slices/filterSlice";
import cartReducer from "./slices/cartSlice";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: {
    items: itemsReducer,
    filter: filterReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
