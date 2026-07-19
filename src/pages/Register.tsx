import { Link } from "react-router";
import { routes } from "../router/routes";

function Register() {
  return (
    <div>
      <h1>Register</h1>
      <Link to={routes.login}>Login</Link>
      <Link to={routes.forgetPassword}>Forget Password</Link>
    </div>
  );
}

export default Register;
