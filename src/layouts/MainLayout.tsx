import Navbar from "../shared/Navbar";
import { Outlet } from "react-router";
import Footer from "../shared/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>

      <div className="min-h-[calc(100vh-316px)]">
        <Outlet></Outlet>
      </div>
      <div className="h-[220px]">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
