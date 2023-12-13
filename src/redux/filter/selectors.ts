import { RootState } from "../store";

export const selectFilter = (state: RootState) => state.filter;

export const selectCategoryId = (state: RootState) => state.filter.categoryId;

export const selectSearchValue = (state: RootState) => state.filter.searchValue;

export const selectSortType = (state: RootState) => state.filter.sortType;
