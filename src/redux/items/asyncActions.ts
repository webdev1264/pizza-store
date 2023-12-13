import { createAsyncThunk } from "@reduxjs/toolkit";
import { Item } from "./types";
import { RootState } from "../store";
import axios from "axios";

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
