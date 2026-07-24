import { themeLogo } from "@/theme/themeLogo";
import useTheme from "@/theme/useTheme";
import type { ComponentPropsWithoutRef } from "react";

type LogoProps = ComponentPropsWithoutRef<"img">;

export default function Logo({ className }: LogoProps) {
  const { resolvedTheme } = useTheme();

  return (
    <img src={themeLogo[resolvedTheme]} alt="Job Hunt" className={className} />
  );
}
