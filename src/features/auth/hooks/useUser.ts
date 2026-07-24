import { getCurrentUser } from "@/features/auth/services";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useUser() {
  const {
    data: user,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  if (error) {
    toast.error(error?.message);
  }

  return { isAuthenticated: user?.role === "authenticated", isLoading };
}
