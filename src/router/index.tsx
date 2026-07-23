import { createBrowserRouter } from "react-router";

import { routes } from "./routes";
import RedirectIfAuth from "./RedirectIfAuth";
import ProtectedRoute from "./ProtectedRoute";

import AuthLayout from "@/layouts/AuthLayout";
import AppLayout from "@/layouts/AppLayout";

import Login from "@/features/auth/pages/Login";
import Register from "@/features/auth/pages/Register";
import ForgetPassword from "@/features/auth/pages/ForgetPassword";

import Dashboard from "@/features/dashboard/pages/Dashboard";
import ApplicationDetail from "@/features/application/pages/ApplicationDetail";
import Settings from "@/features/settings/pages/Settings";
import NotFound from "@/pages/NotFound";

export const router = createBrowserRouter([
  {
    element: <RedirectIfAuth />,
    children: [
      {
        element: <AuthLayout />,
        children: [
          {
            index: true,
            path: routes.register,
            element: <Register />,
          },
          {
            path: routes.login,
            element: <Login />,
          },
          {
            path: routes.forgetPassword,
            element: <ForgetPassword />,
          },
        ],
      },
    ],
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <AppLayout />,
        children: [
          {
            index: true,
            path: routes.dashboard,
            element: <Dashboard />,
          },
          {
            path: routes.applicationDetail,
            element: <ApplicationDetail />,
          },
          {
            path: routes.settings,
            element: <Settings />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
