import { Outlet } from "react-router";

function ProtectedRoute() {
  // check if there is an authenticated user

  return <Outlet />;
}

export default ProtectedRoute;
