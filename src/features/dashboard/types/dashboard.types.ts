export type ApplicationStatus = "applied" | "interview" | "rejected";

export type WorkMode = "on-site" | "remote" | "hybrid";

export type Level = "junior" | "mid" | "senior";

export type ApplicationResponse = {
  id: string | null;
  company: string | null;
  status: ApplicationStatus | null;
  salary: string | null;
  position: string | null;
  workMode: WorkMode | null;
  level: Level | null;
  appliedDate: string | null;
  interviewDate: string | null;
  rejectedDate: string | null;
  applicationLink: string | null;
  resumeVersion: string | null;
  location: string | null;
  notes: string | null;
};
