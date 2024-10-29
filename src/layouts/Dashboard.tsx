import React from "react";
import DashNav from "../pages/Dashboard/DashNav";

const Dashboard = () => {
  return (
    <div className="flex gap-10">
      <DashNav />
      <div>Hi Dashboard</div>
    </div>
  );
};

export default Dashboard;
