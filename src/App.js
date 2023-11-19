import { createContext, useState } from "react";
import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";

import Header from "./components/Header";
import store from "./redux/store";

export const SearchContext = createContext("");

function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <Provider store={store}>
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <div className="wrapper">
          <Header />
          <div className="content">
            <Outlet />
          </div>
        </div>
      </SearchContext.Provider>
    </Provider>
  );
}

export default App;
