import { Link } from "react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  registerSchema,
  type RegisterFormData,
} from "@/schema/auth/auth.schema";
import { useRegister } from "@/features/auth/hooks/useRegister";
import Input from "@/components/Input";
import InputPassword from "@/components/InputPassword";
import Button from "@/components/Button";
import { routes } from "@/router/routes";
import AuthHeader from "../components/AuthHeader";

function Register() {
  const { signUp, isLoading } = useRegister();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  function onSubmit(data: RegisterFormData) {
    signUp(data);
  }

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-15 items-center"
      >
        <AuthHeader title="Welcome to Job Hunt" />

        <div className="w-full space-y-4">
          <Input
            id="email"
            label="Email"
            placeholder="Your email"
            error={errors.email?.message}
            disabled={isLoading}
            {...register("email")}
          />

          <InputPassword
            id="password"
            label="Password"
            placeholder="Your password"
            error={errors.password?.message}
            disabled={isLoading}
            {...register("password")}
          />
        </div>

        <div className="w-full flex flex-col gap-4 items-center">
          <Button isLoading={isLoading}>Register</Button>

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
