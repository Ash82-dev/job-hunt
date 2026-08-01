import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Input from "@/components/Input";
import Select from "@/components/Select";
import Textarea from "@/components/Textarea";
import Button from "@/components/Button";

import {
  applicationSchema,
  toApplicationFormData,
  type ApplicationFormData,
} from "@/features/application/schema/application.schema";
import type { Application } from "@/features/application/types/application.types";

import { useUpdateApplication } from "../hooks/useUpdateApplication";

import {
  applicationStatusesOptions,
  applicationLevelsOptions,
  applicationWorkModesOptions,
} from "../utils/options";

type ApplicationDetailFormProps = {
  id: string;
  application: Application;
  onUpdate: () => void;
};

function ApplicationDetailForm({
  id,
  application,
  onUpdate,
}: ApplicationDetailFormProps) {
  const {
    updateApplication,
    isLoading: isUpdating,
    error,
  } = useUpdateApplication();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
    mode: "onChange",
  });

  useEffect(() => {
    if (application) {
      reset(toApplicationFormData(application));
    }
  }, [application, reset]);

  // eslint-disable-next-line
  const status = watch("status");

  function onSubmit(data: ApplicationFormData) {
    updateApplication({ id, ...data } as Application);
    if (!error) onUpdate();
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

      <Select
        id="status"
        label="Status"
        options={applicationStatusesOptions}
        {...register("status")}
      />

      <Input
        id="position"
        label="Position"
        error={errors.position?.message}
        {...register("position")}
      />

      <Input
        id="salary"
        label="Salary"
        type="number"
        error={errors.salary?.message}
        {...register("salary")}
      />

      <Select
        id="level"
        label="Level"
        options={applicationLevelsOptions}
        {...register("level")}
      />

      <Select
        id="workMode"
        label="Work mode"
        options={applicationWorkModesOptions}
        {...register("workMode")}
      />

      <Input
        id="applicationLink"
        label="Application link"
        error={errors.applicationLink?.message}
        {...register("applicationLink")}
      />

      <Input
        id="location"
        label="Location"
        error={errors.location?.message}
        {...register("location")}
      />

      <Input
        id="resumeVersion"
        label="Resume Version"
        error={errors.resumeVersion?.message}
        {...register("resumeVersion")}
      />

      <Input
        id="appliedDate"
        label="Applied Date"
        type="date"
        error={errors.appliedDate?.message}
        {...register("appliedDate")}
      />

      <Input
        id="interviewDate"
        label="Interview Date"
        type="date"
        error={errors.interviewDate?.message}
        disabled={status !== "interview"}
        {...register("interviewDate")}
      />

      <Input
        id="rejectedDate"
        label="Rejected Date"
        type="date"
        error={errors.rejectedDate?.message}
        disabled={status !== "rejected"}
        {...register("rejectedDate")}
      />

      <Textarea
        id="notes"
        label="Notes"
        {...register("notes")}
        className="sm:col-span-2"
      />

      <Button
        className={`sm:col-span-2 mt-6 disabled:cursor-not-allowed px-4 ml-auto`}
        isLoading={isUpdating}
      >
        Confirm
      </Button>
    </form>
  );
}

export default ApplicationDetailForm;
