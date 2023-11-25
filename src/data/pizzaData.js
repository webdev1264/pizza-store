const typeNames = ["тонкое", "традиционное"];

const sortList = [
  { name: "популярности (убыв)", sortProperty: "rating desc" },
  { name: "популярности (возр)", sortProperty: "rating asc" },
  { name: "цене (убыв)", sortProperty: "price desc" },
  { name: "цене (возр)", sortProperty: "price asc" },
  { name: "алфавиту (убыв)", sortProperty: "title desc" },
  { name: "алфавиту (возр)", sortProperty: "title asc" },
];
export { typeNames, sortList };
