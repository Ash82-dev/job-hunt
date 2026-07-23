import z from "zod";

export const loginSchema = z.object({
  email: z.email("Please enter a valid email address"),
  password: z.string().min(8, "Password must contain at least 8 characters"),
});

export const registerSchema = z.object({
  email: z.email("Please enter a valid email address"),
  password: z.string().min(8, "Password must contain at least 8 characters"),
});

export type LoginFormData = z.infer<typeof loginSchema>;

export type RegisterFormData = z.infer<typeof registerSchema>;
