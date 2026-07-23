import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

import type { AuthParams } from "../types/auth.types";
import { loginUser } from "../services";
import { routes } from "@/router/routes";

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: signIn, isPending: isLoading } = useMutation({
    mutationFn: (credentials: AuthParams) => loginUser(credentials),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user?.user);
      navigate(routes.dashboard);
      toast.success("You are logged in successfully!");
    },
    onError: (error) => {
      toast.error(error?.message);
    },
  });

  return { signIn, isLoading };
}
