import React from "react";
import DashNav from "../pages/Dashboard/DashNav";

const Dashboard = () => {
  return (
    <div className="flex gap-10">
      <div>
        <DashNav />
      </div>
      <div className="">Hi Dashboard</div>
    </div>
  );
};

export default Dashboard;
