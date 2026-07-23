import { themes } from "@/types";
import z from "zod";

export const settingsSchema = z.object({
  theme: z.enum(themes),
});

export type SettingsFormData = z.infer<typeof settingsSchema>;
