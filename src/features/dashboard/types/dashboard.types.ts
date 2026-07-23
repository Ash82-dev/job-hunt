export type ApplicationStatus = "applied" | "viewed" | "interview" | "rejected";

export type ApplicationResponse = {
  id: string | null;
  company: string | null;
  status: ApplicationStatus | null;
};
