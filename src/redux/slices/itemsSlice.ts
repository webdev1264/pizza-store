import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { RootState } from "../store";

type Item = {
  id: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
  imageUrl: string;
};

enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

interface ItemsSliceState {
  items: Item[];
  dataFetchError: string;
  status: Status;
}

const initialState: ItemsSliceState = {
  items: [],
  dataFetchError: "",
  status: Status.LOADING,
};

export const fetchItems = createAsyncThunk<
  Item[],
  string,
  { state: RootState; rejectValue: Error }
>("items/fetchItems", async (url, thunkAPI) => {
  const { sortType, categoryId, searchValue, currentPage } = thunkAPI.getState().filter;

  const [sortName, order] = sortType.sortBy.split(" ");
  const sort = `sortBy=${sortName}&order=${order}`;

  const category = categoryId > 0 ? `&category=${categoryId}` : "";

  const search = `&search=${searchValue}`;

  const pagination = `&page=${currentPage}&limit=${4}`;

  try {
    const res = await axios.get<Item[]>(`${url}?${sort}${category}${search}${pagination}`);
    return res.data;
  } catch (e) {
    console.error(e);
    return thunkAPI.rejectWithValue(e as Error);
  }
});

const itemsSlice = createSlice({
  name: "items",
  reducers: {
    setItems(state, action: PayloadAction<Item[]>) {
      state.items = action.payload;
    },
  },
  initialState,
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

export const selectItems = (state: RootState) => state.items;

export default itemsSlice.reducer;
