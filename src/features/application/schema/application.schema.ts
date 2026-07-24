import z from "zod";
import {
  applicationLevels,
  applicationStatuses,
  applicationWorkModes,
  type Application,
} from "../types/application.types";

export const applicationSchema = z
  .object({
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
    interviewDate: z
      .string()
      .transform((value) => (value === "" ? null : value)),
    rejectedDate: z
      .string()
      .transform((value) => (value === "" ? null : value)),

    applicationLink: z.string(),
    resumeVersion: z.string(),
    location: z.string(),
    notes: z.string(),
  })
  .superRefine((data, ctx) => {
    if (data.status === "interview" && !data.interviewDate) {
      ctx.addIssue({
        code: "custom",
        path: ["interviewDate"],
        message: "Interview date is required.",
      });
    }

    if (data.status === "rejected" && !data.rejectedDate) {
      ctx.addIssue({
        code: "custom",
        path: ["rejectedDate"],
        message: "Rejected date is required.",
      });
    }
  });

export type ApplicationFormData = z.infer<typeof applicationSchema>;

export function toApplicationFormData(
  application: Application,
): ApplicationFormData {
  return {
    company: application.company ?? "",
    status: application.status ?? "applied",
    salary: application.salary ?? "",
    position: application.position ?? "",
    workMode: application.workMode ?? "remote",
    level: application.level ?? "junior",
    appliedDate: application.appliedDate ?? "",
    interviewDate: application.interviewDate ?? "",
    rejectedDate: application.rejectedDate ?? "",
    applicationLink: application.applicationLink ?? "",
    resumeVersion: application.resumeVersion ?? "",
    location: application.location ?? "",
    notes: application.notes ?? "",
  };
}
