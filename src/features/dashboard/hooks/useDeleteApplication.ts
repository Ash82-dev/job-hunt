import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import {
  APPLICATIONS_KEY,
  APPLICATIONS_SUMMARY_KEY,
} from "@/constants/react-query-keys";
import { deleteApplication as deleteApplicationApi } from "@/services";

export function useDeleteApplication() {
  const queryClient = useQueryClient();

  const { mutate: deleteApplication, isPending } = useMutation({
    mutationKey: [APPLICATIONS_KEY],
    mutationFn: (id: string) => deleteApplicationApi(id),
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

  return { deleteApplication, isLoading: isPending };
}
