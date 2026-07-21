import { type ComponentPropsWithoutRef } from "react";

export type SelectOption = {
  label: string;
  value: string;
};

type SelectProps = {
  id: string;
  label?: string;
  options: SelectOption[];
} & ComponentPropsWithoutRef<"select">;

function Select({ id, options, label, ...props }: SelectProps) {
  return (
    <div className={`flex flex-col grow ${label ? "gap-1" : ""}`}>
      {label && (
        <label htmlFor={id} className="text-on-surface">
          {label}
        </label>
      )}
      <select
        id={id}
        {...props}
        className="border px-2 border-outline rounded-sm min-h-10 text-on-surface bg-surface"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
