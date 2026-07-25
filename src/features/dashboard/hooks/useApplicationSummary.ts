import { useQuery } from "@tanstack/react-query";
import { getApplicationsSummary } from "../services";

export function useApplicationSummary() {
  const {
    data: applicationsSummary,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["applicationsSummary"],
    queryFn: getApplicationsSummary,
  });

  return { applicationsSummary, isLoading, error, refetch };
}
