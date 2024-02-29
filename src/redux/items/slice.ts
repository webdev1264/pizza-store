import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Item, ItemsSliceState, Status } from "./types";
import { fetchItems } from "./asyncActions";

const initialState: ItemsSliceState = {
  items: [],
  dataFetchError: "",
  status: Status.LOADING,
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Item[]>) {
      state.items = action.payload;
    },
    resetDataFetchError(state) {
      state.dataFetchError = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchItems.pending, (state) => {
      state.status = Status.LOADING;
    });
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchItems.rejected, (state, action) => {
      state.items = [];
      if (action.payload) {
        state.dataFetchError = action.payload?.message;
      }
      state.status = Status.ERROR;
    });
  },
});

export const { setItems, resetDataFetchError } = itemsSlice.actions;

export default itemsSlice.reducer;
