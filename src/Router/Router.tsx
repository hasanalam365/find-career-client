import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/HomePage/Home";
import FindJobs from "../pages/FindJobs/FindJobs";

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
    ],
  },
]);
