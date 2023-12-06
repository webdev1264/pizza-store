import { Provider } from "react-redux";

import store from "./redux/store";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <Provider store={store}>
      <MainLayout />
    </Provider>
  );
}

export default App;
