import { FaPlus as Plus } from "react-icons/fa6";

type ApplicationsCountProps = {
  count: number;
};

export default function ApplicationsCount({ count }: ApplicationsCountProps) {
  return (
    <div className="flex items-center text-on-surface border-2 rounded-sm border-outline justify-between bg-surface shadow-2xl px-2">
      <span className="border-r-2 border-outline pr-2">{count}</span>
      <button className="pl-2 cursor-pointer">
        <Plus size={12} />
      </button>
    </div>
  );
}
