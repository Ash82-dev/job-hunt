import Board from "@/features/dashboard/components/Board";
import type { ApplicationStatus } from "@/features/dashboard/types/dashboard.types";

const columns = [
  { title: "Applied", status: "applied" },
  { title: "Viewed", status: "viewed" },
  { title: "Interview", status: "interview" },
  { title: "Rejected", status: "rejected" },
];

function Dashboard() {
  return (
    <div className="flex items-center h-full gap-4 px-4 pt-6 overflow-x-scroll">
      {columns.map((column) => (
        <Board
          key={column.status}
          title={column.title}
          status={column.status as ApplicationStatus}
        />
      ))}
    </div>
  );
}

export default Dashboard;
