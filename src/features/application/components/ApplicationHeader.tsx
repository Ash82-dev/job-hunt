// import Button from "@/components/Button";
import { routes } from "@/router/routes";
import { FaArrowRight as BackIcon } from "react-icons/fa6";
import { useNavigate } from "react-router";
// import { MdEdit as EditIcon } from "react-icons/md";

function ApplicationHeader() {
  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-between">
      <h2 className="text-2xl text-on-surface">Application title</h2>
      {/* <Button size="small" className="flex gap-2 px-2">
        <p>Edit</p>
        <EditIcon />
      </Button> */}
      <button
        className="text-on-surface cursor-pointer"
        onClick={() => navigate(routes.dashboard)}
      >
        <BackIcon size={24} />
      </button>
    </header>
  );
}

export default ApplicationHeader;
