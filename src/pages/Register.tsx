import { Link } from "react-router";

import { routes } from "../router/routes";
import Button from "../components/Button";
import Input from "../components/Input";
import InputPassword from "../components/InputPassword";
import { useForm } from "react-hook-form";
import {
  registerSchema,
  type RegisterFormData,
} from "@/schema/auth/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  function onSubmit(data: RegisterFormData) {
    // console.log(data);
  }

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-15 items-center"
      >
        <h1 className="text-2xl sm:text-3xl text-primary font-semibold">
          Welcome to Job Hunt
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
