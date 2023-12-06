import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = { items: [], isLoading: true, dataFetchError: "" };

export const fetchItems = createAsyncThunk("items/fetchItems", async (url, thunkAPI) => {
  const { sortType, categoryId, searchValue, currentPage } = thunkAPI.getState().filter;

  const [sortProperty, order] = sortType.sortProperty.split(" ");
  const sortBy = `sortBy=${sortProperty}&order=${order}`;

  const category = categoryId > 0 ? `&category=${categoryId}` : "";

  const search = `&search=${searchValue}`;

  const pagination = `&page=${currentPage}&limit=${4}`;

  try {
    const res = await axios.get(`${url}?${sortBy}${category}${search}${pagination}`);
    return res.data;
  } catch (e) {
    console.error(e);
    return thunkAPI.rejectWithValue(e.message);
  }
});

const itemsSlice = createSlice({
  name: "items",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchItems.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchItems.rejected, (state, action) => {
      state.items = [];
      state.dataFetchError = action.payload;
      state.isLoading = false;
    });
  },
});

export const selectItems = (state) => state.items;

export default itemsSlice.reducer;
