import { USER_KEY } from "@/constants/react-query-keys";
import { getCurrentUser } from "@/features/auth/services";
import { useQuery } from "@tanstack/react-query";

export function useUser() {
  const {
    data: user,
    isLoading,
    error,
  } = useQuery({
    queryKey: [USER_KEY],
    queryFn: getCurrentUser,
  });

  return { isAuthenticated: user?.role === "authenticated", isLoading, error };
}
