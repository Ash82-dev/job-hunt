import Input from "@/components/Input";
import Select from "@/components/Select";
import Textarea from "@/components/Textarea";
import { offerLevels, workModes } from "../utils/options";
import Button from "@/components/Button";

function ApplicationDetailForm() {
  return (
    <form className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      <Input id="company" label="Company" />
      <Input id="salary" label="Salary" type="number" />
      <Input id="position" label="Position" />
      <Select id="work-mode" label="Work mode" options={workModes} />
      <Select id="level" label="Level" options={offerLevels} />
      <Input id="applied-date" label="Applied Date" type="date" />
      <Input id="application-link" label="Application link" />
      <Input id="resume-version" label="Resume Version" />
      <Textarea id="location" label="Location" />
      <Textarea id="notes" label="Notes" />
      <Button className="sm:col-span-2 mt-6">Confirm</Button>
    </form>
  );
}

export default ApplicationDetailForm;
