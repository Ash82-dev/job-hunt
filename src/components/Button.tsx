import type { ComponentPropsWithoutRef } from "react";

type ButtonProps = {
  variant?: "primary" | "error";
} & ComponentPropsWithoutRef<"button">;

const styles = {
  base: "w-full hover:brightness-90 rounded-sm py-2 cursor-pointer",
  primary: " bg-primary text-on-primary",
  error: " bg-tertiary text-on-tertiary",
};

function Button({ variant = "primary", children }: ButtonProps) {
  const className = styles.base + styles[variant];
  return <button className={className}>{children}</button>;
}

export default Button;
