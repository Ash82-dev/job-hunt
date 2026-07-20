import { type ComponentPropsWithoutRef, type ReactNode } from "react";

type InputProps = {
  id: string;
  label?: string;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
} & ComponentPropsWithoutRef<"input">;

function Input({
  id,
  className,
  label,
  leadingIcon = null,
  trailingIcon = null,
  ...props
}: InputProps) {
  return (
    <div className={`flex flex-col w-full ${label ? "gap-1" : ""}`}>
      {label && (
        <label className="text-start text-on-background" htmlFor={id}>
          {label}
        </label>
      )}
      <div
        className={`
          text-on-background
          flex items-center
          min-h-10
          px-3
          border border-outline
          rounded-xs
          focus-within:border-primary
          ${leadingIcon || trailingIcon ? "gap-2" : ""}
        `}
      >
        {leadingIcon}

        <input
          {...props}
          name={id}
          className={
            className +
            " flex-1 bg-transparent outline-none placeholder:text-on-surface-variant"
          }
        />

        {trailingIcon}
      </div>
    </div>
  );
}

export default Input;
