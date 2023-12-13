import { SortItem } from "../../data/pizzaData";

export interface FilterSliceState {
  categoryId: number;
  currentPage: number;
  sortType: SortItem;
  searchValue: string;
}
