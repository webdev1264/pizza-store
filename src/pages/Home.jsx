import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchItems, useIsLoading, useItems } from "../redux/slices/itemsSlice";
import { useFilter } from "../redux/slices/filterSlice";
import Sort from "../components/Sort";
import Categories from "../components/Categories";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Pagination from "../components/Pagination/";
import "../scss/app.scss";

const Home = () => {
  const { sortType, categoryId, searchValue, currentPage } = useFilter();
  const items = useItems();
  const isLoading = useIsLoading();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems(`https://6556acbdbd4bcef8b6118adc.mockapi.io/api/items`));
  }, [sortType, categoryId, searchValue, currentPage, dispatch]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...Array(4)].map((_, i) => <Skeleton key={i} />)
          : items.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)}
      </div>
      <Pagination />
    </div>
  );
};

export default Home;
