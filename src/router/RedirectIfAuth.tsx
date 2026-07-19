import { Outlet } from "react-router";

function RedirectIfAuth() {
  // const navigate = useNavigate();
  // check if the user is already authenticated
  // if authenticated
  // navigate(routes.home, { replace: true });

  // if not
  return <Outlet />;
}

export default RedirectIfAuth;
