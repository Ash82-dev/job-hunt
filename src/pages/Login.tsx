import { Link } from "react-router";
import { routes } from "../router/routes";
import Button from "../components/Button";
import Input from "../components/Input";

function Login() {
  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <div className="w-full">
      <form
        onSubmit={(event) => handleSubmit(event)}
        className="flex flex-col gap-15 items-center"
      >
        <h1 className="text-3xl text-primary font-semibold">
          Welcome back to Job Hunt
        </h1>

        <div className="w-full space-y-4">
          <Input id="email" label="Email" placeholder="Your email" />
          <Input
            id="password"
            label="Password"
            placeholder="Your password"
            type="password"
          />
          <Link
            to={routes.forgetPassword}
            className="hover:underline hover:text-primary text-on-background"
          >
            Have you forgot your Password?
          </Link>
        </div>

        <div className="w-full flex flex-col gap-4 items-center">
          <Button>Login</Button>

          <Link
            to={routes.register}
            className="hover:underline text-on-background hover:text-primary"
          >
            <p className="">
              Don't have an account?{" "}
              <span className="text-primary">Register now</span>
            </p>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
