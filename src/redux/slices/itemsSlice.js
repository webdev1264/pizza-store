import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import axios from "axios";

const initialState = { items: [], isLoading: true };

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
    thunkAPI.rejectWithValue(e);
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
    builder.addCase(fetchItems.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const useItems = () => useSelector((state) => state.items.items);

export const useIsLoading = () => useSelector((state) => state.items.isLoading);

export default itemsSlice.reducer;
