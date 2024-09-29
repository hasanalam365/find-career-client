import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/HomePage/Home";
import FindJobs from "../pages/FindJobs/FindJobs";
import FindJobDetails from "../components/FindJobDetails";

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
    ],
  },
]);
