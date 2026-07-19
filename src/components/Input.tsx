import { useState, type ComponentPropsWithoutRef } from "react";
import { LuEye, LuEyeClosed } from "react-icons/lu";

type InputProps = {
  id: string;
  label: string;
} & ComponentPropsWithoutRef<"input">;

function Input({ id, label, type, ...props }: InputProps) {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const inputType =
    type === "password" ? (isVisible ? "text" : "password") : type;

  function handleToggle() {
    setIsVisible((v) => !v);
  }

  return (
    <div className="space-x-2 flex flex-col gap-1">
      <label className="text-start" htmlFor={id}>
        {label}
      </label>
      <div
        className="
          flex items-center
          min-h-10
          px-3
          border border-outline
          rounded-xs
          focus-within:border-primary
        "
      >
        <input
          {...props}
          type={inputType}
          name={id}
          className="
            flex-1
            bg-transparent
            outline-none
            placeholder:text-on-surface-variant
          "
        />
        {type === "password" && (
          <button onClick={handleToggle}>
            {inputType === "text" && (
              <LuEye className="text-primary cursor-pointer" size={20} />
            )}
            {inputType === "password" && (
              <LuEyeClosed className="text-primary cursor-pointer" size={20} />
            )}
          </button>
        )}
      </div>
    </div>
  );
}

export default Input;
