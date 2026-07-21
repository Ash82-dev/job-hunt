import type { ComponentPropsWithoutRef } from "react";
import { AiOutlineLoading3Quarters as Spinner } from "react-icons/ai";

type ButtonProps = {
  variant?: "primary" | "error";
  isLoading?: boolean;
} & ComponentPropsWithoutRef<"button">;

const styles = {
  base: " w-full hover:brightness-70 rounded-sm min-h-10 cursor-pointer flex items-center justify-center",
  primary: " bg-primary text-on-primary",
  error: " bg-tertiary text-on-tertiary",
};

function Button({
  variant = "primary",
  isLoading = false,
  children,
  className,
  ...props
}: ButtonProps) {
  const buttonStyles = className + styles.base + styles[variant];

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
