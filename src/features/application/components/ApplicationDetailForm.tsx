import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import ApplicationHeader from "./ApplicationHeader";
import Input from "@/components/Input";
import Select from "@/components/Select";
import Textarea from "@/components/Textarea";
import Button from "@/components/Button";

import {
  applicationSchema,
  type ApplicationFormData,
} from "@/features/application/schema/application.schema";
import type { Application } from "@/features/application/types/application.types";

import { useApplication } from "../hooks/useApplication";
import { useUpdateApplication } from "../hooks/useUpdateApplication";

import {
  applicationStatusesOptions,
  applicationLevelsOptions,
  applicationWorkModesOptions,
} from "../utils/options";

function ApplicationDetailForm() {
  const { id } = useParams();
  const { application, isLoading, error } = useApplication(id);
  const { updateApplication, isLoading: isUpdating } = useUpdateApplication();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
    mode: "onChange",
  });

  // eslint-disable-next-line
  const status = watch("status");

  function onSubmit(data: ApplicationFormData) {
    updateApplication({ id, ...data } as Application);
  }

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <section className="flex flex-col gap-8 px-4">
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

        <Select
          id="status"
          label="Status"
          options={applicationStatusesOptions}
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

        <Input
          id="salary"
          label="Salary"
          type="number"
          error={errors.salary?.message}
          defaultValue={application.salary}
          {...register("salary")}
        />

        <Select
          id="level"
          label="Level"
          options={applicationLevelsOptions}
          defaultValue={application.level}
          {...register("level")}
        />

        <Select
          id="workMode"
          label="Work mode"
          options={applicationWorkModesOptions}
          defaultValue={application.workMode}
          {...register("workMode")}
        />

        <Input
          id="applicationLink"
          label="Application link"
          error={errors.applicationLink?.message}
          defaultValue={application.applicationLink}
          {...register("applicationLink")}
        />

        <Input
          id="location"
          label="Location"
          error={errors.location?.message}
          defaultValue={application.location}
          {...register("location")}
        />

        <Input
          id="resumeVersion"
          label="Resume Version"
          error={errors.resumeVersion?.message}
          defaultValue={application.resumeVersion}
          {...register("resumeVersion")}
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
          id="interviewDate"
          label="Interview Date"
          type="date"
          error={errors.interviewDate?.message}
          defaultValue={application.interviewDate}
          disabled={status !== "interview"}
          {...register("interviewDate")}
        />

        <Input
          id="rejectedDate"
          label="Rejected Date"
          type="date"
          error={errors.rejectedDate?.message}
          defaultValue={application.rejectedDate}
          disabled={status !== "rejected"}
          {...register("rejectedDate")}
        />

        <Textarea
          id="notes"
          label="Notes"
          defaultValue={application.notes}
          {...register("notes")}
        />

        <Button
          className={`sm:col-span-2 mt-6 disabled:cursor-not-allowed`}
          isLoading={isLoading || isUpdating}
          disabled={!isValid}
        >
          Confirm
        </Button>
      </form>
    </section>
  );
}

export default ApplicationDetailForm;
