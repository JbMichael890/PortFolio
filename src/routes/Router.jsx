import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import Home from "../page/Home";
import About from "../page/About";

export const mainRoutes = createBrowserRouter([
  {
    element: <Mainlayout />,
    children: [
      {
        element: <Home />,
        path: "/",
      },
      {
        element: <About />,
        path: "/about",
      },
    ],
  },
]);
