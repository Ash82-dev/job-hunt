import type { ComponentPropsWithoutRef } from "react";
import { AiOutlineLoading3Quarters as Spinner } from "react-icons/ai";

type ButtonProps = {
  variant?: "primary" | "small" | "error";
  size?: "base" | "small";
  isLoading?: boolean;
} & ComponentPropsWithoutRef<"button">;

const styles = {
  base: "hover:brightness-70 rounded-sm cursor-pointer flex items-center justify-center",
  primary: "bg-primary text-on-primary",
  error: "bg-tertiary text-on-tertiary",
};

const sizeStyles = {
  base: "min-h-10 w-full",
  small: "w-fit",
};

function Button({
  variant = "primary",
  size = "base",
  isLoading = false,
  children,
  className,
  ...props
}: ButtonProps) {
  const buttonStyles = `${styles.base} ${sizeStyles[size]} ${styles[variant]} ${className}`;

  return (
    <button
      className={buttonStyles}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? <Spinner className="animate-spin" size={20} /> : children}
    </button>
  );
}

export default Button;
