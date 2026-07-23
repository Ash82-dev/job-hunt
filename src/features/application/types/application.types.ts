export const applicationStatuses = [
  "applied",
  "interview",
  "rejected",
] as const;

export type ApplicationStatus = (typeof applicationStatuses)[number];

export const applicationWorkModes = ["on-site", "remote", "hybrid"] as const;

export type ApplicationWorkMode = (typeof applicationWorkModes)[number];

export const applicationLevels = ["junior", "mid", "senior"] as const;

export type ApplicationLevel = (typeof applicationLevels)[number];

export type ApplicationResponse = {
  id: string | null;
  company: string | null;
  status: ApplicationStatus | null;
  salary: string | null;
  position: string | null;
  workMode: ApplicationWorkMode | null;
  level: ApplicationLevel | null;
  appliedDate: string | null;
  interviewDate: string | null;
  rejectedDate: string | null;
  applicationLink: string | null;
  resumeVersion: string | null;
  location: string | null;
  notes: string | null;
};

export type ApplicationSummaryResponse = {
  id: string;
  company: string;
  status: ApplicationStatus;
};

export type Application = {
  id: string;
  company: string;
  status: ApplicationStatus;
  salary: string;
  position: string;
  workMode: ApplicationWorkMode;
  level: ApplicationLevel;
  appliedDate: string;
  interviewDate: string | null;
  rejectedDate: string | null;
  applicationLink: string | null;
  resumeVersion: string | null;
  location: string | null;
  notes: string | null;
};
