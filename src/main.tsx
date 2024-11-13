import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Router";
import AuthProvider from "./authenticate/AuthProvider";
import { ParallaxProvider } from "react-scroll-parallax";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ParallaxProvider>
          <RouterProvider router={router} />
        </ParallaxProvider>
        <ToastContainer />
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);
