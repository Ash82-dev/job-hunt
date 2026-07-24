import { Navigate, Outlet } from "react-router";

import { useUser } from "@/features/auth/hooks/useUser";
import { routes } from "./routes";
import Spinner from "@/components/Spinner";

function ProtectedRoute() {
  const { isAuthenticated, isLoading } = useUser();

  if (!isAuthenticated && !isLoading) return <Navigate to={routes.login} />;

  if (isLoading) return <Spinner fullPage />;

  if (isAuthenticated) return <Outlet />;
}

export default ProtectedRoute;
