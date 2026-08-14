import { useNavigate } from "react-router";

import { FaArrowRight as BackIcon } from "react-icons/fa6";
import Button from "@/components/Button";
import { routes } from "@/router/routes";
import type { ReactNode } from "react";
import capitalize from "@/utils/capitalize";

type ApplicationDetailHeaderProps = {
  title: string;
  children?: ReactNode;
};

function ApplicationHeader({
  title,
  children = null,
}: ApplicationDetailHeaderProps) {
  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-between">
      <h2 className="text-3xl text-on-surface">{capitalize(title)}</h2>

      <div className="flex gap-4">
        {children}

        <Button
          variant="raw"
          size="raw"
          className="text-on-surface cursor-pointer"
          onClick={() => navigate(routes.dashboard)}
        >
          <BackIcon size={24} />
        </Button>
      </div>
    </header>
  );
}

export default ApplicationHeader;
