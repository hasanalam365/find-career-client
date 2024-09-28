import Navbar from "../shared/Navbar";
import { Outlet } from "react-router";
import Footer from "../shared/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>

      <div className="h-[calc(100vh-316px)]">
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
