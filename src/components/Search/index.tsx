import React, { memo, useCallback, useEffect, useRef, useState } from "react";

import debounce from "../../utils/debounce";
import styles from "./search.module.scss";
import { useAppDispatch } from "../../redux/store";
import { useSelector } from "react-redux";
import { selectSearchValue } from "../../redux/filter/selectors";
import { setSearchValue } from "../../redux/filter/slice";

const Search: React.FC = () => {
  const searchValue = useSelector(selectSearchValue);
  const [inputValue, setInputValue] = useState(searchValue);
  const searchRef = useRef<HTMLInputElement>(null);

  const dispatch = useAppDispatch();

  useEffect(() => {
    searchRef.current?.focus();
  }, [inputValue]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateSearchValue = useCallback(
    debounce((value: string) => {
      dispatch(setSearchValue(value));
    }, 250),
    [],
  );

  const handleOnSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    updateSearchValue(e.target.value);
  };

  const handleOnClearSearch = () => {
    setInputValue("");
    updateSearchValue("");
  };

  return (
    <div className={styles.root}>
      <svg className={styles.icon} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <title />
        <g id="search">
          <path d="M29.71,28.29l-6.5-6.5-.07,0a12,12,0,1,0-1.39,1.39s0,.05,0,.07l6.5,6.5a1,1,0,0,0,1.42,0A1,1,0,0,0,29.71,28.29ZM14,24A10,10,0,1,1,24,14,10,10,0,0,1,14,24Z" />
        </g>
      </svg>
      {inputValue && (
        <svg
          className={styles.closeIcon}
          onClick={handleOnClearSearch}
          height="48"
          viewBox="0 0 48 48"
          width="48"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z" />
          <path d="M0 0h48v48h-48z" fill="none" />
        </svg>
      )}
      <input
        className={styles.input}
        placeholder="Search for pizza..."
        onChange={handleOnSearchChange}
        value={inputValue}
        ref={searchRef}
      />
    </div>
  );
};

export default memo(Search);
