export enum SortBy {
  RATING_DESC = "rating desc",
  RATING_ASC = "rating asc",
  PRICE_DESC = "price desc",
  PRICE_ASC = "price asc",
  TITLE_DESC = "title desc",
  TITLE_ASC = "title asc",
}

export type SortItem = {
  name: string;
  sortBy: SortBy;
};

type TypeNames = ["thin", "traditional"];

const typeNames: TypeNames = ["thin", "traditional"];

const sortList: SortItem[] = [
  { name: "popularity (high to low)", sortBy: SortBy.RATING_DESC },
  { name: "popularity (low to high)", sortBy: SortBy.RATING_ASC },
  { name: "price (low to high)", sortBy: SortBy.PRICE_ASC },
  { name: "price (high to low)", sortBy: SortBy.PRICE_DESC },
  { name: "alphabet (A-Z)", sortBy: SortBy.TITLE_DESC },
  { name: "alphabet (Z-A)", sortBy: SortBy.TITLE_ASC },
];

const categories = ["All", "Meat", "Vegetarian", "Grill", "Spicy", "Closed"];

export { typeNames, sortList, categories };
