import { createContext, useState } from "react";

export const SortContext = createContext();

const SortByContextProvider = ({ children }) => {
  const [sortByIndex, setSortByIndex] = useState(0);

  return (
    <SortContext.Provider value={{ sortByIndex, setSortByIndex }}>{children}</SortContext.Provider>
  );
};

export default SortByContextProvider;
