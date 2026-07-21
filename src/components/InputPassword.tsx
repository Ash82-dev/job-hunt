import { useState, type ComponentPropsWithoutRef } from "react";
import Input from "./Input";
import { LuEye, LuEyeClosed } from "react-icons/lu";

type InputPasswordProps = {
  id: string;
  label?: string;
  error?: string;
} & ComponentPropsWithoutRef<"input">;

function InputPassword({
  id,
  label,
  error,
  className,
  ...props
}: InputPasswordProps) {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const inputType = isVisible ? "text" : "password";

  function handleToggle() {
    setIsVisible((v) => !v);
  }

  return (
    <>
      <Input
        id={id}
        type={inputType}
        label={label}
        trailingIcon={
          <button onClick={handleToggle}>
            {inputType === "text" && (
              <LuEyeClosed className="text-primary cursor-pointer" size={20} />
            )}
            {inputType === "password" && (
              <LuEye className="text-primary cursor-pointer" size={20} />
            )}
          </button>
        }
        {...props}
        className={className}
        error={error}
      />
    </>
  );
}

export default InputPassword;
