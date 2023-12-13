export type Item = {
  id: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
  imageUrl: string;
};

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export interface ItemsSliceState {
  items: Item[];
  dataFetchError: string;
  status: Status;
}
