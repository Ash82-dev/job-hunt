import { useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { logoutUser } from "../services";
import { routes } from "@/router/routes";

export function useLogout() {
  const navigate = useNavigate();

  const { mutate: logout, isPending } = useMutation({
    mutationKey: ["user"],
    mutationFn: logoutUser,
    onSuccess: () => {
      navigate(routes.login);
      toast.success("Logout successful!");
    },
    onError: (error) => {
      toast.error(error?.message);
    },
  });

  return { logout, isLoading: isPending };
}
