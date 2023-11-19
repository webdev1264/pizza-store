import { useEffect, useState } from "react";

import Sort from "../components/Sort";
import Categories from "../components/Categories";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import "../scss/app.scss";

const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState({
    name: "популярности (убыв)",
    sortProperty: "rating desc",
  });

  useEffect(() => {
    const [sortProperty, order] = sortType.sortProperty.split(" ");
    const sortBy = `sortBy=${sortProperty}&order=${order}`;

    const category = categoryId > 0 ? `&category=${categoryId}` : "";

    setIsLoading(true);
    fetch(`https://6556acbdbd4bcef8b6118adc.mockapi.io/api/items?${sortBy}${category}`)
      .then((res) => res.json())
      .then((data) => setItems(data))
      .finally(() => setIsLoading(false));
  }, [categoryId, sortType]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories categoryId={categoryId} categoryIdChange={(id) => setCategoryId(id)} />
        <Sort sortType={sortType} sortTypeChange={(id) => setSortType(id)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...Array(9)].map((_, i) => <Skeleton key={i} />)
          : items.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)}
      </div>
    </div>
  );
};

export default Home;
