import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import qs from "qs";

import Sort from "../components/Sort";
import Categories from "../components/Categories";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Pagination from "../components/Pagination";
import Error from "../components/Error";
import { findSortType } from "../utils/itemsHelpers";
import { useAppDispatch } from "../redux/store";
import { selectItems } from "../redux/items/selectors";
import { selectFilter } from "../redux/filter/selectors";
import { setCategoryId, setCurrentPage, setSortType } from "../redux/filter/slice";
import { fetchItems } from "../redux/items/asyncActions";
import "../scss/app.scss";

const Home: React.FC = () => {
  const { items, dataFetchError, status } = useSelector(selectItems);
  const { sortType, categoryId, searchValue, currentPage } = useSelector(selectFilter);
  const isSearch = useRef(false);
  const isMounted = useRef(false);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    if (isMounted.current) {
      const queryParams = qs.stringify({
        sortBy: sortType.sortBy,
        categoryId,
        currentPage,
      });
      navigate(`?${queryParams}`);
    }
  }, [sortType, categoryId, currentPage, navigate]);

  useEffect(() => {
    if (location.search && !isMounted.current) {
      const searchParams = qs.parse(location.search.substring(1));
      const { sortBy, categoryId, currentPage } = searchParams;

      sortBy && dispatch(setSortType(findSortType(String(sortBy))));
      categoryId && dispatch(setCategoryId(Number(categoryId)));
      currentPage && dispatch(setCurrentPage(Number(currentPage)));

      isSearch.current = true;
    }
    isMounted.current = true;
  }, [location.search, dispatch]);

  useEffect(() => {
    if (!isSearch.current) {
      const url: string = "https://6556acbdbd4bcef8b6118adc.mockapi.io/api/items";
      dispatch(fetchItems(url));
    }
    isSearch.current = false;
  }, [sortType, categoryId, searchValue, currentPage, dispatch]);

  const skeletons = [...Array(4)].map((_, i) => <Skeleton key={i} />);
  const pizzas = items.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />);

  const content = () => {
    return <div className="content__items">{status === "loading" ? skeletons : pizzas}</div>;
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">All pizzas</h2>
      {dataFetchError ? <Error /> : content()}
      <Pagination currentPage={currentPage} itemsCount={items.length} />
    </div>
  );
};

export default Home;
