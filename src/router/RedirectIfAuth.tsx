import { useUser } from "@/features/auth/hooks/useUser";
import { Navigate, Outlet } from "react-router";
import { routes } from "./routes";
import Spinner from "@/components/Spinner";

function RedirectIfAuth() {
  const { isAuthenticated, isLoading } = useUser();

  if (isAuthenticated) return <Navigate to={routes.dashboard} replace />;

  if (isLoading) return <Spinner />;

  if (!isAuthenticated) return <Outlet />;
}

export default RedirectIfAuth;
