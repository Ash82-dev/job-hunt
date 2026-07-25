import { useQuery } from "@tanstack/react-query";
import { getApplicationById } from "../services";

export function useApplication(id: string) {
  const {
    data: application,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["application", id],
    queryFn: () => getApplicationById(id!),
    enabled: !!id,
  });

  return { application, isLoading, error, refetch };
}
