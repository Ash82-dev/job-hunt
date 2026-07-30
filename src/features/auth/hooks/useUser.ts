import { getCurrentUser } from "@/features/auth/services";
import { useQuery } from "@tanstack/react-query";

export function useUser() {
  const {
    data: user,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  return { isAuthenticated: user?.role === "authenticated", isLoading, error };
}
