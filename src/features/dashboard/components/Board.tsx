import ApplicationBox from "./ApplicationBox";
import ApplicationsCount from "./ApplicationsCount";

type BoardProps = {
  title: string;
  status: "applied" | "viewed" | "interview" | "rejected";
};

const borerStyles = {
  applied: "border-status-applied",
  viewed: "border-status-viewed",
  interview: "border-status-interview",
  rejected: "border-status-rejected",
};

function Board({ title, status }: BoardProps) {
  return (
    <div
      className={`bg-surface-variant min-w-90 grow h-full rounded-xl p-4 border-t-4 ${borerStyles[status]}`}
    >
      <header
        className={`flex items-center justify-between text-on-surface-variant pb-2 border-b-2 border-outline`}
      >
        <h2 className="font-semibold">{title}</h2>
        <ApplicationsCount />
      </header>

      <ApplicationBox />
    </div>
  );
}

export default Board;
