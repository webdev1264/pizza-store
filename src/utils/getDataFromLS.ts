import { CartItem } from "../redux/cart/types";

export const getDataFromLS = (name: string): CartItem[] => {
  if (typeof window !== "undefined") {
    const data = localStorage.getItem(name);
    if (data) {
      return JSON.parse(data);
    }
  }
  return [];
};
