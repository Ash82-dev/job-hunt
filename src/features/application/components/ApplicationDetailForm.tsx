import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Input from "@/components/Input";
import Select from "@/components/Select";
import Textarea from "@/components/Textarea";
import Button from "@/components/Button";
import { applicationStatus, offerLevels, workModes } from "../utils/options";
import {
  applicationSchema,
  type ApplicationFormData,
} from "@/schema/application/application.schema";
import { useApplication } from "../hooks/useApplication";
import { useParams } from "react-router";
import ApplicationHeader from "./ApplicationHeader";

function ApplicationDetailForm() {
  const { id } = useParams();
  const { application, isLoading, error } = useApplication(id);

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

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <section className="flex flex-col gap-8 px-4 py-6">
      <ApplicationHeader title={application.company} />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 sm:grid-cols-2 gap-5"
      >
        <Input
          id="company"
          label="Company"
          error={errors.company?.message}
          defaultValue={application.company}
          {...register("company")}
        />

        <Input
          id="salary"
          label="Salary"
          type="number"
          error={errors.salary?.message}
          defaultValue={application.salary}
          {...register("salary")}
        />

        <Select
          id="status"
          label="Status"
          options={applicationStatus}
          defaultValue={application.status}
          {...register("status")}
        />

        <Input
          id="position"
          label="Position"
          error={errors.position?.message}
          defaultValue={application.position}
          {...register("position")}
        />

        <Select
          id="workMode"
          label="Work mode"
          options={workModes}
          defaultValue={application.workMode}
          {...register("workMode")}
        />

        <Select
          id="level"
          label="Level"
          options={offerLevels}
          defaultValue={application.level}
          {...register("level")}
        />

        <Input
          id="appliedDate"
          label="Applied Date"
          type="date"
          error={errors.appliedDate?.message}
          defaultValue={application.appliedDate}
          {...register("appliedDate")}
        />

        <Input
          id="applicationLink"
          label="Application link"
          error={errors.applicationLink?.message}
          defaultValue={application.applicationLink}
          {...register("applicationLink")}
        />

        <Input
          id="resumeVersion"
          label="Resume Version"
          error={errors.resumeVersion?.message}
          defaultValue={application.resumeVersion}
          {...register("resumeVersion")}
        />

        <Input
          id="location"
          label="Location"
          error={errors.location?.message}
          defaultValue={application.location}
          {...register("location")}
        />

        <Textarea
          id="notes"
          label="Notes"
          defaultValue={application.notes}
          {...register("notes")}
        />

        <Button className="sm:col-span-2 mt-6">Confirm</Button>
      </form>
    </section>
  );
}

export default ApplicationDetailForm;
