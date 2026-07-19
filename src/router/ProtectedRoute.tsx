import { Navigate } from "react-router";
import { routes } from "./routes";

function ProtectedRoute() {
  return <Navigate to={routes.register} replace />;
}

export default ProtectedRoute;
