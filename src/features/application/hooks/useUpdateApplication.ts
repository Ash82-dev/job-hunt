import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateApplication as update } from "../services";
import type { Application } from "@/features/application/types/application.types";
import toast from "react-hot-toast";

export function useUpdateApplication() {
  const queryClient = useQueryClient();

  const { mutate: updateApplication, isPending } = useMutation({
    mutationFn: (newApplication: Application) => update(newApplication),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["application"],
      });

      queryClient.invalidateQueries({
        queryKey: ["applicationsSummary"],
      });

      toast.success("Application successfully updated!");
    },
    onError: (err) => {
      toast.error(err?.message);
    },
  });

  return { updateApplication, isLoading: isPending };
}
