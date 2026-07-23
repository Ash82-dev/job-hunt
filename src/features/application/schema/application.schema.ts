import z from "zod";
import {
  applicationLevels,
  applicationStatuses,
  applicationWorkModes,
} from "../types/application.types";

export const applicationSchema = z.object({
  company: z.string().nonempty("This field is required"),
  salary: z.string().nonempty("This field is required"),
  position: z.string().nonempty("This field is required"),
  status: z.enum(applicationStatuses),
  workMode: z.enum(applicationWorkModes),
  level: z.enum(applicationLevels),
  appliedDate: z
    .string()
    .nonempty("This field is required")
    .transform((value) => (value === "" ? null : value)),
  interviewDate: z.string().transform((value) => (value === "" ? null : value)),
  rejectedDate: z.string().transform((value) => (value === "" ? null : value)),
  applicationLink: z.string(),
  resumeVersion: z.string(),
  location: z.string(),
  notes: z.string(),
});

export type ApplicationFormData = z.infer<typeof applicationSchema>;
