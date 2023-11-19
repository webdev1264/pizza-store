import { useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "./components/Header";
import "./scss/app.scss";

function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="App">
      <div className="wrapper">
        <Header searchValue={searchValue} changeSearchValue={(value) => setSearchValue(value)} />
        <div className="content">
          <Outlet context={searchValue} />
        </div>
      </div>
    </div>
  );
}

export default App;
