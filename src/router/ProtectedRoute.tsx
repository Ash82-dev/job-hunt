import { Navigate, Outlet } from "react-router";

import { useUser } from "@/features/auth/hooks/useUser";
import { routes } from "./routes";
import Spinner from "@/components/Spinner";
import toast from "react-hot-toast";

function ProtectedRoute() {
  const { isAuthenticated, isLoading, error } = useUser();

  if (error) {
    toast.error(error.message);
    return <Navigate to={routes.login} />;
  }

  if (isLoading) return <Spinner fullPage />;

  if (!isAuthenticated && !isLoading) return <Navigate to={routes.login} />;

  if (isAuthenticated) return <Outlet />;
}

export default ProtectedRoute;
