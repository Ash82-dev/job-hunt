import { useNavigate } from "react-router";
import { FaArrowRight as BackIcon } from "react-icons/fa6";
import { routes } from "@/router/routes";

type ApplicationHeaderProps = {
  title: string;
};

function ApplicationHeader({ title }: ApplicationHeaderProps) {
  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-between">
      <h2 className="text-2xl text-on-surface">{title}</h2>
      <button
        className="text-on-surface cursor-pointer"
        onClick={() => navigate(routes.dashboard)}
      >
        <BackIcon size={24} />
      </button>
    </header>
  );
}

export default ApplicationHeader;
