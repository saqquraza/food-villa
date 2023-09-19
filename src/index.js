import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import About from "./Pages/About";
import Error from "./Pages/Error";
import Body from "./Components/Body";
import RestaurantDetail from "./Components/RestaurantDetail";

const appRouter = createBrowserRouter([
  {
    path: routes.home,
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: routes.home, element: <Body /> },
      { path: routes.about, element: <About /> },
      { path: `${routes.restaurants}/:name/:id`, element: <RestaurantDetail /> },
    ],
  },
  // { path: routes.about, element: <About /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
