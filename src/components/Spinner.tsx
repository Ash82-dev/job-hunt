import { ImSpinner2 as SpinnerIcon } from "react-icons/im";

type SpinnerProps = {
  fullPage?: boolean;
};

function Spinner({ fullPage = false }: SpinnerProps) {
  return (
    <div
      className={`${fullPage ? "w-dvw h-dvh" : "w-full h-full"} bg-surface flex items-center justify-center`}
    >
      <SpinnerIcon size={50} className="text-primary animate-spin" />
    </div>
  );
}

export default Spinner;
