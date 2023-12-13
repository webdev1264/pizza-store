import { configureStore } from "@reduxjs/toolkit";

import itemsReducer from "./items/slice";
import filterReducer from "./filter/slice";
import cartReducer from "./cart/slice";
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
