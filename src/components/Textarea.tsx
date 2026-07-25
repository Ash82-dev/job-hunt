import type { ComponentPropsWithoutRef } from "react";

type TextareaProps = {
  id: string;
  label: string;
} & ComponentPropsWithoutRef<"textarea">;

function Textarea({ id, label, className, ...props }: TextareaProps) {
  return (
    <div
      className={`flex flex-col w-full ${label ? "gap-1" : ""} ${className} `}
    >
      {label && (
        <label className="text-start text-on-background" htmlFor={id}>
          {label}
        </label>
      )}

      <textarea
        id={id}
        className="rounded-sm p-2 text-on-surface border border-outline outline-none focus:border-primary min-h-20 resize-none "
        {...props}
      />
    </div>
  );
}

export default Textarea;
