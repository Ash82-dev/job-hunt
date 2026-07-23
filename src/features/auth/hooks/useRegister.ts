import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

import { registerUser } from "../services";
import type { AuthParams } from "../types/auth.types";
import { routes } from "@/router/routes";

export function useRegister() {
  const navigate = useNavigate();

  const { mutate: signUp, isPending: isLoading } = useMutation({
    mutationFn: (credentials: AuthParams) => registerUser(credentials),
    onSuccess: () => {
      navigate(routes.dashboard);
      toast.success("You are registered successfully!");
    },
    onError: (error) => {
      toast.error(error?.message);
    },
  });

  return { signUp, isLoading };
}
