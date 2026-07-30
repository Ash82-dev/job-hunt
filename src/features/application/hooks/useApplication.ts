import { APPLICATIONS_KEY } from "@/constants/react-query-keys";
import { getApplicationById } from "@/services";
import { useQuery } from "@tanstack/react-query";

export function useApplication(id: string) {
  const {
    data: application,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: [APPLICATIONS_KEY, id],
    queryFn: () => getApplicationById(id!),
    enabled: !!id,
  });

  return { application, isLoading, error, refetch };
}
