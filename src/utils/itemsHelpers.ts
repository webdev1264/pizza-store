import { SortItem, sortList } from "../data/pizzaData";
import { CartItem } from "../redux/cart/types";

const isItemEqual = <T extends Pick<CartItem, "id" | "type" | "size">>(obj1: T, obj2: T) => {
  return obj1.id === obj2.id && obj1.type === obj2.type && obj1.size === obj2.size;
};

const totalItems = <T extends CartItem[]>(cart: T) => {
  return cart.reduce((sum, item) => sum + item.count, 0);
};

const totalPrice = <T extends CartItem[]>(cart: T) => {
  return cart.reduce((sum, item) => sum + item.price * item.count, 0);
};

const findSortType = (sortBy: string) => {
  return sortList.find((sortObj) => sortObj.sortBy === sortBy) as SortItem;
};

export { isItemEqual, totalItems, totalPrice, findSortType };
