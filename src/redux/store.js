import { configureStore } from "@reduxjs/toolkit";

import itemsReducer from "./slices/itemsSlice";
import filterReducer from "./slices/filterSlice";

const store = configureStore({
  reducer: {
    items: itemsReducer,
    filter: filterReducer,
  },
});

export default store;
