import type { SelectOption } from "@/components/Select";

export const offerLevels: SelectOption[] = [
  { value: "junior", label: "Junior" },
  { value: "mid", label: "Mid" },
  { value: "senior", label: "Senior" },
];

export const workModes: SelectOption[] = [
  { value: "on-site", label: "On-Site" },
  { value: "remote", label: "Remote" },
  { value: "hybrid", label: "Hybrid" },
];

export const applicationStatus: SelectOption[] = [
  { label: "Applied", value: "applied" },
  { label: "Interview", value: "interview" },
  { label: "Rejected", value: "rejected" },
];
