import Board from "@/features/dashboard/components/Board";

function Dashboard() {
  return (
    <div className="flex items-center h-full gap-4 px-4 py-6 overflow-x-scroll">
      <Board title="Applied" status="applied" />
      <Board title="Viewed" status="viewed" />
      <Board title="Interview" status="interview" />
      <Board title="Rejected" status="rejected" />
    </div>
  );
}

export default Dashboard;
