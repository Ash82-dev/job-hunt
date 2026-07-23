import { supabase } from "@/services/supabase";
import type { ApplicationSummaryResponse } from "../../application/types/application.types";

export async function getApplicationsSummary(): Promise<
  ApplicationSummaryResponse[]
> {
  const { data: applications, error } = await supabase
    .from("applications")
    .select("id,company,status");

  if (error) throw new Error(error.message);

  return applications;
}
