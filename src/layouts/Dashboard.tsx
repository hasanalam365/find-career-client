import React from "react";
import DashNav from "../pages/Dashboard/DashNav";
import { Outlet } from "react-router";

const Dashboard = () => {
  return (
    <div className="flex gap-10">
      <div>
        <DashNav />
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Dashboard;
