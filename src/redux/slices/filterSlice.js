import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
  categoryId: 0,
  currentPage: 1,
  sortType: {
    name: "популярности (убыв)",
    sortProperty: "rating desc",
  },
  searchValue: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setSortType(state, action) {
      state.sortType = action.payload;
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
  },
});

export const useFilter = () => useSelector((state) => state.filter);

export const { setCategoryId, setCurrentPage, setSortType, setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;
