import { useMutation } from "@tanstack/react-query";
import { updateApplication as update } from "../services";
import type { ApplicationResponse } from "@/features/dashboard/types/dashboard.types";
import toast from "react-hot-toast";

export function useUpdateApplication() {
  const { mutate: updateApplication, isPending } = useMutation({
    mutationFn: (newApplication: ApplicationResponse) => update(newApplication),
    onSuccess: () => {
      toast.success("Application successfully updated!");
    },
    onError: (err) => {
      toast.error(err?.message);
    },
  });

  return { updateApplication, isLoading: isPending };
}
