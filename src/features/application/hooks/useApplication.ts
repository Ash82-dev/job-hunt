import { useQuery } from "@tanstack/react-query";
import { getApplicationById } from "../services";

export function useApplication(id: string) {
  const {
    data: application,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["application"],
    queryFn: () => getApplicationById(id),
  });

  return { application, isLoading, error };
}
