import type { ComponentPropsWithoutRef } from "react";
import { AiOutlineLoading3Quarters as Spinner } from "react-icons/ai";

type ButtonProps = {
  variant?: "primary" | "error" | "raw";
  size?: "base" | "small" | "raw";
  isLoading?: boolean;
} & ComponentPropsWithoutRef<"button">;

const styles = {
  base: "enabled:hover:brightness-70 font-semibold disabled:brightness-50 disabled:cursor-not-allowed rounded-sm enabled:cursor-pointer flex items-center justify-center",
  primary: "bg-primary text-on-primary",
  error: "bg-error text-on-error",
  raw: "",
};

const sizeStyles = {
  base: "min-h-10",
  small: "min-h-8 min-w-20",
  raw: "",
};

function Button({
  variant = "primary",
  size = "base",
  isLoading = false,
  children,
  className,
  disabled,
  ...props
}: ButtonProps) {
  const buttonStyles = `${styles.base} ${sizeStyles[size]} ${styles[variant]} ${className}`;

  return (
    <button
      {...props}
      className={buttonStyles}
      disabled={isLoading || disabled}
    >
      {isLoading ? <Spinner className="animate-spin" size={20} /> : children}
    </button>
  );
}

export default Button;
