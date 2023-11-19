import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../App";

import Sort from "../components/Sort";
import Categories from "../components/Categories";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Pagination from "../components/Pagination/";
import "../scss/app.scss";

const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortType, setSortType] = useState({
    name: "популярности (убыв)",
    sortProperty: "rating desc",
  });
  const { searchValue } = useContext(SearchContext);

  const pageRange = 4;
  const pageCount = Math.ceil(10 / pageRange);

  useEffect(() => {
    const [sortProperty, order] = sortType.sortProperty.split(" ");
    const sortBy = `sortBy=${sortProperty}&order=${order}`;

    const category = categoryId > 0 ? `&category=${categoryId}` : "";

    const search = `&search=${searchValue}`;

    const pagination = `&page=${currentPage}&limit=${pageRange}`;

    setIsLoading(true);
    fetch(
      `https://6556acbdbd4bcef8b6118adc.mockapi.io/api/items?${sortBy}${category}${search}${pagination}`,
    )
      .then((res) => res.json())
      .then((data) => setItems(data))
      .finally(() => setIsLoading(false));
  }, [categoryId, sortType, currentPage, searchValue]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories categoryId={categoryId} categoryIdChange={(id) => setCategoryId(id)} />
        <Sort sortType={sortType} sortTypeChange={(id) => setSortType(id)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...Array(4)].map((_, i) => <Skeleton key={i} />)
          : items.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)}
      </div>
      <Pagination pageChange={setCurrentPage} pageRange={pageRange} pageCount={pageCount} />
    </div>
  );
};

export default Home;
