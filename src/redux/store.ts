import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import itemsReducer from "./items/slice";
import filterReducer from "./filter/slice";
import cartReducer from "./cart/slice";

const makeStore = () => {
  return configureStore({
    reducer: {
      items: itemsReducer,
      filter: filterReducer,
      cart: cartReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;

export type AppDispatch = AppStore["dispatch"];

export const useAppDispatch: () => AppDispatch = useDispatch;

export default makeStore;
