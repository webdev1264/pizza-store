import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import loadable from "@loadable/component";

import App from "./App";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import PizzaInfo from "./components/PizzaInfo";

const Cart = loadable(() => import(/*webpackChunkName: "Cart"*/ "./pages/Cart"), {
  fallback: <div>Loading...</div>,
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "pizza/:id",
        element: <PizzaInfo />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<RouterProvider router={router} />);
