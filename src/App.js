import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "./components/Header";

export const SearchContext = createContext("");

function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      <div className="wrapper">
        <Header />
        <div className="content">
          <Outlet />
        </div>
      </div>
    </SearchContext.Provider>
  );
}

export default App;
