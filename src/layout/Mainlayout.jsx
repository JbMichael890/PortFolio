
import Header from "../static/Header";
import Footer from "../static/Footer";
import { Outlet } from "react-router-dom";

const Mainlayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Mainlayout;
