import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import Home from "../page/Home";
import About from "../page/About";
import Contact from "../page/Contact";
import Projects from "../page/Projects";

export const mainRoutes = createBrowserRouter([
  {
    element: <Mainlayout />,
    children: [
      {
        element: <Home />,
        path: "/",
      },
      {
        element: <Projects/>,
        path: "/project",
      },
      {
        element: <About />,
        path: "/about",
      },
      {
        element: <Contact/>,
        path: "/contact"
      }
    ],
  },
]);
