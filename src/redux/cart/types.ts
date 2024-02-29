type CartItem = {
  id: string;
  title: string;
  price: number;
  size: number;
  type: string;
  count: number;
  imageUrl: string;
};

interface CartSliceState {
  items: CartItem[];
}

export type { CartItem, CartSliceState };
