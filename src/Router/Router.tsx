import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/HomePage/Home";
import FindJobs from "../pages/FindJobs/FindJobs";
import FindJobDetails from "../components/FindJobDetails";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../layouts/Dashboard";
import PrivateRoute from "./PrivateRoute";
import Profile from "../pages/Dashboard/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/find-jobs",
        element: <FindJobs></FindJobs>,
      },
      {
        path: "/find-job/details/1",
        element: <FindJobDetails></FindJobDetails>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/profile",
        element: <Profile />,
      },
    ],
  },
]);
