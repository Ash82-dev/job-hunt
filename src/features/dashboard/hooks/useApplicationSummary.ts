import { useQuery } from "@tanstack/react-query";
import { getApplicationsSummary } from "@/services";
import { APPLICATIONS_SUMMARY_KEY } from "@/constants/react-query-keys";

export function useApplicationSummary() {
  const {
    data: applicationsSummary,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: [APPLICATIONS_SUMMARY_KEY],
    queryFn: getApplicationsSummary,
  });

  return { applicationsSummary, isLoading, error, refetch };
}
