import React from "react";
import DashNav from "../pages/Dashboard/DashNav";
import { Outlet } from "react-router";

const Dashboard = () => {
  return (
    <div className="flex ">
      <div>
        <DashNav />
      </div>
      <div className="bg-[#f1f1f1] p-8 w-full">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
