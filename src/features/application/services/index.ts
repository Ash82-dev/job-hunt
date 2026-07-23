import { supabase } from "@/services/supabase";
import type { ApplicationResponse } from "@/features/dashboard/types/dashboard.types";

export async function getApplicationById(
  id: string,
): Promise<ApplicationResponse> {
  const { data: application, error } = await supabase
    .from("applications")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw new Error(error.message);

  return application;
}

export async function updateApplication(newApplication: ApplicationResponse) {
  const { id, ...changes } = newApplication;

  const { error } = await supabase
    .from("applications")
    .update(changes)
    .eq("id", id);

  if (error) throw new Error(error.message);
}
