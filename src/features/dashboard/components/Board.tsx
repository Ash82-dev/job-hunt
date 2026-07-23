import type {
  ApplicationStatus,
  ApplicationSummaryResponse,
} from "../../application/types/application.types";
import ApplicationItem from "./ApplicationItem";
import ApplicationsCount from "./ApplicationsCount";

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
  return (
    <div
      className={`bg-surface-variant min-w-90 grow h-full rounded-xl p-4 border-t-4 ${borerStyles[status]}`}
    >
      <header
        className={`flex items-center justify-between text-on-surface-variant pb-2 border-b-2 border-outline`}
      >
        <h2 className="font-semibold">{title}</h2>
        <ApplicationsCount count={applications.length} />
      </header>

      <ul className="mt-4 flex flex-col gap-4">
        {applications.map((application) => (
          <ApplicationItem key={application.id} application={application} />
        ))}
      </ul>
    </div>
  );
}

export default Board;
