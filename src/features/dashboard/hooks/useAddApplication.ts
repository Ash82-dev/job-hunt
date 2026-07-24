import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addApplication as addApplicationApi } from "../services";
import toast from "react-hot-toast";
import type { ApplicationStatus } from "@/features/application/types/application.types";

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
        queryKey: ["applicationsSummary"],
      });

      toast.success("Application added successfully!");
    },
    onError: (error) => {
      toast.error(error?.message);
    },
  });

  return { addApplication, isLoading, error };
}
