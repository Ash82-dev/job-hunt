import { FaPlus as Plus } from "react-icons/fa6";

import type {
  ApplicationStatus,
  ApplicationSummaryResponse,
} from "../../application/types/application.types";
import ApplicationItem from "./ApplicationItem";
import { useState } from "react";

type BoardProps = {
  title: string;
  status: ApplicationStatus;
  applications: ApplicationSummaryResponse[];
};

const borerStyles = {
  applied: "border-status-applied",
  interview: "border-status-interview",
  rejected: "border-status-rejected",
};

function Board({ title, status, applications }: BoardProps) {
  const [isCreating, setIsCreating] = useState(false);

  return (
    <div
      className={`bg-surface-variant basis-90 grow h-full rounded-xl p-4 border-t-4 ${borerStyles[status]}`}
    >
      <header
        className={`flex items-center justify-between text-on-surface-variant pb-2 border-b-2 border-outline`}
      >
        <h2 className="font-semibold">{title}</h2>

        <div className="flex items-center text-on-surface border-2 rounded-sm border-outline justify-between bg-surface shadow-2xl px-2">
          <span className="border-r-2 border-outline pr-2">
            {applications.length}
          </span>
          <button
            className="pl-2 cursor-pointer"
            onClick={() => setIsCreating(true)}
          >
            <Plus size={12} />
          </button>
        </div>
      </header>

      <ul className="mt-4 flex flex-col gap-4">
        {isCreating && (
          <ApplicationItem
            mode="creating"
            status={status}
            onCancel={() => setIsCreating(false)}
          />
        )}

        {applications.map((application) => (
          <ApplicationItem key={application.id} application={application} />
        ))}
      </ul>
    </div>
  );
}

export default Board;
