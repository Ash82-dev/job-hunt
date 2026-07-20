import { Navigate, Outlet } from "react-router";
import { routes } from "./routes";

function ProtectedRoute() {
  // return <Navigate to={routes.register} replace />;
  return <Outlet />;
}

export default ProtectedRoute;
