import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Layout from "../components/pages/Layout";
import HomePage from "../components/pages/HomePage";
import GameDetailPage from "../components/pages/GameDetailPage";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      { index: true, element: <HomePage></HomePage> },
      { path: "games/:id/", element: <GameDetailPage></GameDetailPage> },
    ],
  },
]);

export default routers;
