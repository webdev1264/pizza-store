import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { SortBy, SortItem } from "../../data/pizzaData";

export interface FilterSliceState {
  categoryId: number;
  currentPage: number;
  sortType: SortItem;
  searchValue: string;
}

const initialState: FilterSliceState = {
  categoryId: 0,
  currentPage: 1,
  sortType: {
    name: "популярности (убыв)",
    sortBy: SortBy.RATING_DESC,
  },
  searchValue: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setSortType(state, action: PayloadAction<SortItem>) {
      state.sortType = action.payload;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setFilters(state, action: PayloadAction<Omit<FilterSliceState, "searchValue">>) {
      if (Object.keys(action.payload).length) {
        state.categoryId = action.payload.categoryId;
        state.currentPage = action.payload.currentPage;
        state.sortType = action.payload.sortType;
      } else {
        return initialState;
      }
    },
  },
});

export const selectFilter = (state: RootState) => state.filter;

export const { setCategoryId, setCurrentPage, setSortType, setSearchValue, setFilters } =
  filterSlice.actions;

export default filterSlice.reducer;
