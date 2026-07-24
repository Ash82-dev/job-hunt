import { Navigate, Outlet } from "react-router";

import { useUser } from "@/features/auth/hooks/useUser";
import { routes } from "./routes";

function ProtectedRoute() {
  const { isAuthenticated, isLoading } = useUser();

  if (!isAuthenticated && !isLoading) return <Navigate to={routes.login} />;

  if (isLoading) return <p>Loading</p>;

  if (isAuthenticated) return <Outlet />;
}

export default ProtectedRoute;
