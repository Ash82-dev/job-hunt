import { forwardRef, type ComponentPropsWithRef } from "react";

export type SelectOption = {
  label: string;
  value: string;
};

type SelectProps = {
  id: string;
  label?: string;
  options: SelectOption[];
} & ComponentPropsWithRef<"select">;

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ id, options, label, ...props }, ref) => {
    return (
      <div className={`flex flex-col grow ${label ? "gap-1" : ""}`}>
        {label && (
          <label htmlFor={id} className="text-on-surface">
            {label}
          </label>
        )}
        <select
          id={id}
          ref={ref}
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
  },
);

Select.displayName = "Select";

export default Select;
