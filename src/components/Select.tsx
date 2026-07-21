import type { ThemeOption } from "@/theme/themeContext";
import { forwardRef, type ComponentPropsWithRef } from "react";

type SelectProps = {
  id: string;
  label?: string;
  options: ThemeOption[];
} & ComponentPropsWithRef<"select">;

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ id, options, label, ...props }, ref) => {
    return (
      <div className="flex items-center">
        {label && (
          <label htmlFor={id} className="text-on-surface pr-2">
            {label}
          </label>
        )}
        <select
          id={id}
          ref={ref}
          {...props}
          className="border-2 border-outline rounded-sm w-50 min-h-10 text-on-surface bg-surface"
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
