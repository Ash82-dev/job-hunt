import Button from "@/components/Button";
import Input from "@/components/Input";
import type { ApplicationResponse } from "../types/dashboard.types";

type ApplicationItemProps = {
  mode?: "creating" | "item";
  application: ApplicationResponse;
};

function ApplicationItem({ mode = "item", application }: ApplicationItemProps) {
  if (mode === "creating") {
    return (
      <li className="bg-surface px-3 py-4 rounded-md shadow-md text-on-surface flex flex-col gap-4">
        <Input id="title" placeholder="Application title" />
        <div className="flex gap-2 justify-end w-1/2 ml-auto">
          <Button>Add</Button>
          <Button variant="error">Cancel</Button>
        </div>
      </li>
    );
  }

  return (
    <li className="bg-surface px-2 py-4 rounded-md shadow-md text-on-surface">
      <h3>{application.company}</h3>
    </li>
  );
}

export default ApplicationItem;
