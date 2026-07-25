import { useEffect, useState, type ReactNode } from "react";
import { ThemeContext } from "./themeContext";
import type { Theme } from "@/types";

type Props = {
  children: ReactNode;
};

export function ThemeProvider({ children }: Props) {
  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem("theme") as Theme) ?? "dark";
  });

  const resolvedTheme: Theme = theme === "dark" ? "dark" : "light";

  useEffect(() => {
    const root = document.documentElement;

    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const applyTheme = () => {
      const isDark = theme === "dark" || (theme === "system" && media.matches);

      root.classList.toggle("dark", isDark);
    };

    applyTheme();

    media.addEventListener("change", applyTheme);

    localStorage.setItem("theme", theme);

    return () => media.removeEventListener("change", applyTheme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
