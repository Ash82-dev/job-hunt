import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Input from "@/components/Input";
import Select from "@/components/Select";
import Textarea from "@/components/Textarea";
import Button from "@/components/Button";
import { offerLevels, workModes } from "../utils/options";
import {
  applicationSchema,
  type ApplicationFormData,
} from "@/schema/application/application.schema";

function ApplicationDetailForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
  });

  function onSubmit(data: ApplicationFormData) {
    // console.log(data);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 sm:grid-cols-2 gap-5"
    >
      <Input
        id="company"
        label="Company"
        error={errors.company?.message}
        {...register("company")}
      />
      <Input
        id="salary"
        label="Salary"
        type="number"
        error={errors.salary?.message}
        {...register("salary")}
      />
      <Input
        id="position"
        label="Position"
        error={errors.position?.message}
        {...register("position")}
      />
      <Select
        id="workMode"
        label="Work mode"
        options={workModes}
        {...register("workMode")}
      />
      <Select
        id="level"
        label="Level"
        options={offerLevels}
        {...register("level")}
      />
      <Input
        id="appliedDate"
        label="Applied Date"
        type="date"
        error={errors.appliedDate?.message}
        {...register("appliedDate")}
      />
      <Input
        id="applicationLink"
        label="Application link"
        error={errors.applicationLink?.message}
        {...register("applicationLink")}
      />
      <Input
        id="resumeVersion"
        label="Resume Version"
        error={errors.resumeVersion?.message}
        {...register("resumeVersion")}
      />
      <Textarea id="location" label="Location" {...register("location")} />
      <Textarea id="notes" label="Notes" {...register("notes")} />
      <Button className="sm:col-span-2 mt-6">Confirm</Button>
    </form>
  );
}

export default ApplicationDetailForm;
