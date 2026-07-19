import { createBrowserRouter } from "react-router";

import RedirectIfAuth from "./RedirectIfAuth";
import ProtectedRoute from "./ProtectedRoute";

import AuthLayout from "../layouts/AuthLayout";
import AppLayout from "../layouts/AppLayout";

import Register from "../pages/Register";
import Login from "../pages/Login";
import ForgetPassword from "../pages/ForgetPassword";
import Dashboard from "../pages/Dashboard";
import ApplicationDetail from "../pages/ApplicationDetail";
import Settings from "../pages/Settings";
import NotFound from "../pages/NotFound";

import { routes } from "./routes";

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
