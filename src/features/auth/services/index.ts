import { supabase } from "@/services/supabase";

type AuthParams = {
  email: string;
  password: string;
};

export async function registerUser({ email, password }: AuthParams) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    throw new Error("Registering user failed!");
  }

  return data;
}

export async function loginUser({ email, password }: AuthParams) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error("Logging in user failed!");
  }

  return data;
}
