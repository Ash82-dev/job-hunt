import { createContext } from "react";
import type { SelectOption } from "@/components/Select";
import type { Theme } from "@/types";

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
