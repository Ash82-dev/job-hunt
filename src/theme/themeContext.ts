import type { SelectOption } from "@/components/Select";
import { createContext } from "react";

export type Theme = "light" | "dark" | "system";

export const themeOptions: SelectOption[] = [
  {
    label: "Light",
    value: "light",
  },
  {
    label: "Dark",
    value: "dark",
  },
  {
    label: "System",
    value: "system",
  },
];

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);
