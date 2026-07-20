import { FaPlus as Plus } from "react-icons/fa6";

export default function ApplicationsCount() {
  return (
    <div className="flex items-center text-on-surface border-2 rounded-sm border-outline justify-between bg-surface shadow-2xl px-2">
      <span className="border-r-2 border-outline pr-2">10</span>
      <button className="pl-2 cursor-pointer">
        <Plus size={12} />
      </button>
    </div>
  );
}
