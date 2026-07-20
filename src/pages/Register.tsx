import { Link } from "react-router";

import { routes } from "../router/routes";
import Button from "../components/Button";
import Input from "../components/Input";

function Register() {
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
          Welcome to Job Hunt
        </h1>

        <div className="w-full space-y-4">
          <Input id="email" label="Email" placeholder="Your email" />
          <Input
            id="password"
            label="Password"
            placeholder="Your password"
            type="password"
          />
        </div>

        <div className="w-full flex flex-col gap-4 items-center">
          <Button>Register</Button>

          <Link
            to={routes.login}
            className="hover:underline text-on-background hover:text-primary"
          >
            Already have an account? <span className="text-primary">Login</span>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Register;
