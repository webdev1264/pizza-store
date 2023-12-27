"use client";

import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "qs";

import Sort from "./Sort";
import Categories from "./Categories";
import PizzaBlock from "./PizzaBlock";
import Skeleton from "./PizzaBlock/Skeleton";
import Pagination from "./Pagination";
import Error from "./Error";
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

  const router = useRouter();

  const search = useSearchParams().toString();

  useEffect(() => {
    if (isMounted.current) {
      const queryParams = qs.stringify({
        sortBy: sortType.sortBy,
        categoryId,
        currentPage,
      });
      router.push(`?${queryParams}`);
    }
  }, [sortType, categoryId, currentPage, router]);

  useEffect(() => {
    if (search && !isMounted.current) {
      const searchParams = qs.parse(search);
      const { sortBy, categoryId, currentPage } = searchParams;

      sortBy && dispatch(setSortType(findSortType(String(sortBy))));
      categoryId && dispatch(setCategoryId(Number(categoryId)));
      currentPage && dispatch(setCurrentPage(Number(currentPage)));

      isSearch.current = true;
    }
    isMounted.current = true;
  }, [search, dispatch]);

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
