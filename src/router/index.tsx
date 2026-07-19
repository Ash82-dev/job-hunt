import { createBrowserRouter } from "react-router";

import RedirectIfAuth from "./RedirectIfAuth";
import ProtectedRoute from "./ProtectedRoute";

import AuthLayout from "../layouts/AuthLayout";
import AppLayout from "../layouts/AppLayout";

import Login from "../pages/Login";
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
            path: routes.login,
            element: <Login />,
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
