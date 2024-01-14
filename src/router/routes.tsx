import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Layout from "../components/pages/Layout";
import HomePage from "../components/pages/HomePage";
import GameDetailPage from "../components/pages/GameDetailPage";
import ErrorPage from "../components/pages/ErrorPage";
import ErrorHandlerPage from "../components/pages/ErrorHandlerPage";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { index: true, element: <HomePage></HomePage> },
      { path: "games/:slug/", element: <GameDetailPage></GameDetailPage> },
    ],
  },
]);

export default routers;
