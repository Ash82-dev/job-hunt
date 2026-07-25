import { themeLogo } from "@/theme/themeLogo";
import useTheme from "@/theme/useTheme";
import type { ComponentPropsWithoutRef } from "react";

type LogoProps = ComponentPropsWithoutRef<"img">;

export default function Logo({ className }: LogoProps) {
  const { theme } = useTheme();

  return <img src={themeLogo[theme]} alt="Job Hunt" className={className} />;
}
