import { routes } from "@/router/routes";
import { Link } from "react-router";

function ForgetPassword() {
  return (
    <div>
      <h1>Forget password</h1>
      <Link to={routes.register}>Register</Link>
      <Link to={routes.login}>Login</Link>
    </div>
  );
}

export default ForgetPassword;
