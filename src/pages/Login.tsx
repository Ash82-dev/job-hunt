import { Link } from "react-router";
import { routes } from "../router/routes";
import Button from "../components/Button";
import Input from "../components/Input";
import InputPassword from "../components/InputPassword";
import { useForm } from "react-hook-form";
import { loginSchema, type LoginFormData } from "@/schema/auth/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  function onSubmit(data: LoginFormData) {
    // console.log(data);
  }

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-15 items-center"
      >
        <h1 className="text-2xl sm:text-3xl text-primary font-semibold">
          Welcome back to Job Hunt
        </h1>

        <div className="w-full space-y-4">
          <Input
            id="email"
            label="Email"
            placeholder="Your email"
            error={errors.email?.message}
            {...register("email")}
          />
          <InputPassword
            id="password"
            label="Password"
            placeholder="Your password"
            error={errors.password?.message}
            {...register("password")}
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
