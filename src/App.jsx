
import { RouterProvider } from "react-router-dom";
import { mainRoutes } from "./routes/Router";

const App = () => {
  return <RouterProvider router={mainRoutes} />;
};

export default App;
