import { useUser } from "@/hooks/useUser";
import { Navigate, Outlet } from "react-router";
import { routes } from "./routes";

function RedirectIfAuth() {
  const { isAuthenticated, isLoading } = useUser();

  if (isAuthenticated) return <Navigate to={routes.dashboard} replace />;

  if (isLoading) return <p>Loading...</p>;

  if (!isAuthenticated) return <Outlet />;
}

export default RedirectIfAuth;
