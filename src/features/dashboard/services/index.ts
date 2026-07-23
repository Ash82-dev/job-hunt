import { supabase } from "@/services/supabase";
import type { ApplicationResponse } from "../types/dashboard.types";

export async function getApplicationsSummary(): Promise<ApplicationResponse[]> {
  const { data: applications, error } = await supabase
    .from("applications")
    .select("id,company,status");

  if (error) throw new Error(error.message);

  return applications;
}
