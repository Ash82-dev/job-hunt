import { useUser } from "@/features/auth/hooks/useUser";
import { Navigate, Outlet } from "react-router";
import { routes } from "./routes";
import Spinner from "@/components/Spinner";
import toast from "react-hot-toast";

function RedirectIfAuth() {
  const { isAuthenticated, isLoading, error } = useUser();

  if (isLoading) return <Spinner fullPage />;

  if (error) {
    toast.error(error.message);
    return <Outlet />;
  }

  if (isAuthenticated) return <Navigate to={routes.dashboard} replace />;

  if (!isAuthenticated && !isLoading) return <Outlet />;
}

export default RedirectIfAuth;
