import type { SelectOption } from "@/components/Select";

export const applicationLevelsOptions: SelectOption[] = [
  { value: "junior", label: "Junior" },
  { value: "mid", label: "Mid" },
  { value: "senior", label: "Senior" },
];

export const applicationWorkModesOptions: SelectOption[] = [
  { value: "on-site", label: "On-Site" },
  { value: "remote", label: "Remote" },
  { value: "hybrid", label: "Hybrid" },
];

export const applicationStatusesOptions: SelectOption[] = [
  { label: "Applied", value: "applied" },
  { label: "Interview", value: "interview" },
  { label: "Rejected", value: "rejected" },
];
