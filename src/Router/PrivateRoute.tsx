import React from "react";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router";
import { ScaleLoader } from "react-spinners";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  const location = useLocation();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <ScaleLoader />
      </div>
    );
  }

  if (user) {
    return children;
  }

  return (
    <Navigate to="/login" state={location?.pathname || "/"} replace></Navigate>
  );
};

export default PrivateRoute;
