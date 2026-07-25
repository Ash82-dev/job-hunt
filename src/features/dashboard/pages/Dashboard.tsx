import Board from "@/features/dashboard/components/Board";
import { useApplicationSummary } from "@/features/dashboard/hooks/useApplicationSummary";
import type { ApplicationStatus } from "@/features/application/types/application.types";
import { useSearch } from "../contexts/useSearch";
import Spinner from "@/components/Spinner";
import Error from "@/components/Error";

const columns = [
  { title: "Applied", status: "applied" },
  { title: "Interview", status: "interview" },
  { title: "Rejected", status: "rejected" },
];

function Dashboard() {
  const { query } = useSearch();
  const { applicationsSummary, isLoading, error, refetch } =
    useApplicationSummary();

  const filteredApplicationsSummary = query
    ? applicationsSummary.filter((app) =>
        app.company.toLowerCase().includes(query.toLowerCase()),
      )
    : applicationsSummary;

  if (isLoading) return <Spinner />;

  if (error) return <Error message={error?.message} onRetry={refetch} />;

  return (
    <div className="flex items-center h-full gap-4 p-4 overflow-x-auto">
      {columns.map((column) => (
        <Board
          key={column.status}
          title={column.title}
          status={column.status as ApplicationStatus}
          applications={filteredApplicationsSummary.filter(
            (app) => app.status === column.status,
          )}
        />
      ))}
    </div>
  );
}

export default Dashboard;
