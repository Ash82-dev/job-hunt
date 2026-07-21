import z from "zod";

export const applicationSchema = z.object({
  company: z.string().nonempty("This field is required"),
  salary: z.string().nonempty("This field is required"),
  position: z.string().nonempty("This field is required"),
  workMode: z.string(),
  level: z.string().nonempty("This field is required"),
  appliedDate: z.string().nonempty("This field is required"),
  applicationLink: z.string(),
  resumeVersion: z.string(),
  location: z.string(),
  notes: z.string(),
});

export type ApplicationFormData = z.infer<typeof applicationSchema>;
