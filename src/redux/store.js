import { configureStore } from "@reduxjs/toolkit";

import itemsReducer from "./slices/itemsSlice";
import filterReducer from "./slices/filterSlice";
import cartReducer from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    items: itemsReducer,
    filter: filterReducer,
    cart: cartReducer,
  },
});

export default store;
