import { Outlet } from "react-router";

function RedirectIfAuth() {
  return <Outlet />;
}

export default RedirectIfAuth;
