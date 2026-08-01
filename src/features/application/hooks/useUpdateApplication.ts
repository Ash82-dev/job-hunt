import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateApplication as update } from "@/services";
import type { Application } from "@/features/application/types/application.types";
import toast from "react-hot-toast";
import {
  APPLICATIONS_KEY,
  APPLICATIONS_SUMMARY_KEY,
} from "@/constants/react-query-keys";

export function useUpdateApplication() {
  const queryClient = useQueryClient();

  const {
    mutate: updateApplication,
    isPending,
    error,
  } = useMutation({
    mutationFn: (newApplication: Application) => update(newApplication),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [APPLICATIONS_KEY],
      });

      queryClient.invalidateQueries({
        queryKey: [APPLICATIONS_SUMMARY_KEY],
      });

      toast.success("Application successfully updated!");
    },
    onError: (err) => {
      toast.error(err?.message);
    },
  });

  return { updateApplication, isLoading: isPending, error };
}
