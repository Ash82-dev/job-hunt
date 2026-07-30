import { supabase } from "@/services/supabase";
import type { AuthParams } from "../types/auth.types";

export async function registerUser({ email, password }: AuthParams) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    throw new Error(error?.message);
  }

  return data;
}

export async function loginUser({ email, password }: AuthParams) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(error?.message);
  }

  return data;
}

export async function logoutUser() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    throw new Error(error?.message);
  }
}

export async function getCurrentUser() {
  const { data: user, error } = await supabase.auth.getUser();

  if (error) throw new Error(error?.message);

  return user?.user;
}
