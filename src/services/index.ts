import type {
  Application,
  ApplicationResponse,
  ApplicationStatus,
  ApplicationSummaryResponse,
} from "@/features/application/types/application.types";
import { supabase } from "./supabase";

export async function getApplicationsSummary(): Promise<
  ApplicationSummaryResponse[]
> {
  const { data: applications, error } = await supabase
    .from("applications")
    .select("id,company,status");

  if (error) throw new Error(error.message);

  return applications;
}

export async function addApplication(title: string, status: ApplicationStatus) {
  const { error } = await supabase
    .from("applications")
    .insert([{ company: title, status }]);

  if (error) throw new Error(error.message);
}

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

export async function updateApplication(newApplication: Application) {
  const { id, ...changes } = newApplication;

  const { error } = await supabase
    .from("applications")
    .update(changes)
    .eq("id", id);

  if (error) throw new Error(error.message);
}

export async function updateApplicationStatus(
  id: string,
  status: ApplicationStatus,
) {
  const { error } = await supabase
    .from("applications")
    .update({ status })
    .eq("id", id);

  if (error) throw new Error(error.message);
}

export async function deleteApplication(id: string) {
  const { error } = await supabase.from("applications").delete().eq("id", id);

  if (error) throw new Error(error.message);
}
