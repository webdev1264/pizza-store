import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import qs from "qs";

import { fetchItems, useIsLoading, useItems } from "../redux/slices/itemsSlice";
import { setCategoryId, setCurrentPage, setSortType, useFilter } from "../redux/slices/filterSlice";
import Sort from "../components/Sort";
import Categories from "../components/Categories";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Pagination from "../components/Pagination/";
import { findSortType } from "../utils/itemsHelpers";
import "../scss/app.scss";

const Home = () => {
  const { sortType, categoryId, searchValue, currentPage } = useFilter();
  const isSearch = useRef(false);
  const isMounted = useRef(false);
  const dispatch = useDispatch();
  const items = useItems();
  const isLoading = useIsLoading();

  const navigate = useNavigate();

  useEffect(() => {
    if (isMounted.current) {
      const queryParams = qs.stringify({
        sortProperty: sortType.sortProperty,
        categoryId,
        currentPage,
      });
      navigate(`?${queryParams}`);
    }
    isMounted.current = true;
  }, [sortType, categoryId, currentPage, navigate]);

  useEffect(() => {
    if (window.location.search) {
      const searchParams = qs.parse(window.location.search);
      const { sortProperty, categoryId, currentPage } = searchParams;

      sortProperty && dispatch(setSortType(findSortType(sortProperty)));
      categoryId && dispatch(setCategoryId(Number(categoryId)));
      currentPage && dispatch(setCurrentPage(Number(currentPage)));

      isSearch.current = true;
    }
  }, [dispatch]);

  useEffect(() => {
    if (!isSearch.current) {
      const url = "https://6556acbdbd4bcef8b6118adc.mockapi.io/api/items";
      dispatch(fetchItems(url));
    }
    isSearch.current = false;
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
      <Pagination currentPage={currentPage} />
    </div>
  );
};

export default Home;
