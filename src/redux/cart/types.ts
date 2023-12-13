export type CartItem = {
  id: string;
  title: string;
  price: number;
  size: number;
  type: string;
  count: number;
  imageUrl: string;
};

export interface CartSliceState {
  items: CartItem[];
}
