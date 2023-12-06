import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation, Link } from "react-router-dom";
import qs from "qs";

import { fetchItems, selectItems } from "../redux/slices/itemsSlice";
import {
  setCategoryId,
  setCurrentPage,
  setSortType,
  selectFilter,
} from "../redux/slices/filterSlice";
import Sort from "../components/Sort";
import Categories from "../components/Categories";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Pagination from "../components/Pagination/";
import Error from "../components/Error";
import { findSortType } from "../utils/itemsHelpers";
import "../scss/app.scss";

const Home = () => {
  const { sortType, categoryId, searchValue, currentPage } = useSelector(selectFilter);
  const isSearch = useRef(false);
  const isMounted = useRef(false);
  const dispatch = useDispatch();
  const { items, isLoading, dataFetchError } = useSelector(selectItems);

  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    if (isMounted.current) {
      const queryParams = qs.stringify({
        sortProperty: sortType.sortProperty,
        categoryId,
        currentPage,
      });
      navigate(`?${queryParams}`);
    }
  }, [sortType, categoryId, currentPage, navigate]);

  useEffect(() => {
    if (location.search && !isMounted.current) {
      const searchParams = qs.parse(location.search.substring(1));
      const { sortProperty, categoryId, currentPage } = searchParams;

      sortProperty && dispatch(setSortType(findSortType(sortProperty)));
      categoryId && dispatch(setCategoryId(Number(categoryId)));
      currentPage && dispatch(setCurrentPage(Number(currentPage)));

      isSearch.current = true;
    }
    isMounted.current = true;
  }, [location.search, dispatch]);

  useEffect(() => {
    if (!isSearch.current) {
      const url = "https://6556acbdbd4bcef8b6118adc.mockapi.io/api/items";
      dispatch(fetchItems(url));
    }
    isSearch.current = false;
  }, [sortType, categoryId, searchValue, currentPage, dispatch]);

  const pizzas = [...Array(4)].map((_, i) => <Skeleton key={i} />);
  const skeletons = items.map((pizza) => (
    <Link key={pizza.id} to={`/pizza/${pizza.id}`}>
      <PizzaBlock {...pizza} />
    </Link>
  ));

  const content = () => {
    return <div className="content__items">{isLoading ? pizzas : skeletons}</div>;
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      {dataFetchError ? <Error /> : content()}
      <Pagination currentPage={currentPage} />
    </div>
  );
};

export default Home;
