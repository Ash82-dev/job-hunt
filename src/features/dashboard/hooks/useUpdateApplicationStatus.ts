import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateApplicationStatus as updateStatus } from "@/services";
import type { ApplicationStatus } from "@/features/application/types/application.types";
import toast from "react-hot-toast";
import {
  APPLICATIONS_KEY,
  APPLICATIONS_SUMMARY_KEY,
} from "@/constants/react-query-keys";

export function useUpdateApplicationStatus() {
  const queryClient = useQueryClient();

  const { mutate: updateApplicationStatus, isPending } = useMutation({
    mutationFn: ({ id, status }: { id: string; status: ApplicationStatus }) =>
      updateStatus(id, status),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [APPLICATIONS_KEY],
      });

      queryClient.invalidateQueries({
        queryKey: [APPLICATIONS_SUMMARY_KEY],
      });

      toast.success("Application status updated!");
    },
    onError: (err) => {
      toast.error(err?.message);
    },
  });

  return { updateApplicationStatus, isLoading: isPending };
}
