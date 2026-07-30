import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addApplication as addApplicationApi } from "@/services";
import toast from "react-hot-toast";
import type { ApplicationStatus } from "@/features/application/types/application.types";
import { APPLICATIONS_SUMMARY_KEY } from "@/constants/react-query-keys";

type AddApplicationPayload = {
  title: string;
  status: ApplicationStatus;
};

export function useAddApplication() {
  const queryClient = useQueryClient();

  const {
    mutate: addApplication,
    isPending: isLoading,
    error,
  } = useMutation({
    mutationFn: ({ title, status }: AddApplicationPayload) =>
      addApplicationApi(title, status),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [APPLICATIONS_SUMMARY_KEY],
      });

      toast.success("Application added successfully!");
    },
    onError: (error) => {
      toast.error(error?.message);
    },
  });

  return { addApplication, isLoading, error };
}
