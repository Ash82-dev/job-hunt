import Board from "@/features/dashboard/components/Board";
import { useApplicationSummary } from "@/features/dashboard/hooks/useApplicationSummary";
import type { ApplicationStatus } from "@/features/dashboard/types/dashboard.types";

const columns = [
  { title: "Applied", status: "applied" },
  { title: "Interview", status: "interview" },
  { title: "Rejected", status: "rejected" },
];

function Dashboard() {
  const { applicationsSummary, isLoading, error } = useApplicationSummary();

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <div className="flex items-center h-full gap-4 p-4 overflow-x-auto">
      {columns.map((column) => (
        <Board
          key={column.status}
          title={column.title}
          status={column.status as ApplicationStatus}
          applications={applicationsSummary.filter(
            (app) => app.status === column.status,
          )}
        />
      ))}
    </div>
  );
}

export default Dashboard;
