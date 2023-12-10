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

type TypeNames = ["тонкое", "традиционное"];

const typeNames: TypeNames = ["тонкое", "традиционное"];

const sortList: SortItem[] = [
  { name: "популярности (убыв)", sortBy: SortBy.RATING_DESC },
  { name: "популярности (возр)", sortBy: SortBy.RATING_ASC },
  { name: "цене (убыв)", sortBy: SortBy.PRICE_DESC },
  { name: "цене (возр)", sortBy: SortBy.PRICE_ASC },
  { name: "алфавиту (убыв)", sortBy: SortBy.TITLE_DESC },
  { name: "алфавиту (возр)", sortBy: SortBy.TITLE_ASC },
];

const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];

export { typeNames, sortList, categories };
