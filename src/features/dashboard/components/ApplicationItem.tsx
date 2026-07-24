import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Button from "@/components/Button";
import Input from "@/components/Input";
import type {
  ApplicationStatus,
  ApplicationSummaryResponse,
} from "../../application/types/application.types";
import { routes } from "@/router/routes";
import { useAddApplication } from "../hooks/useAddApplication";
import {
  addApplicationSchema,
  type AddApplicationFormData,
} from "../schema/dashboard.schema";

type ApplicationItemProps = {
  mode?: "creating" | "item";
  status?: ApplicationStatus;
  onCancel?: () => void;
  application?: ApplicationSummaryResponse;
};

function ApplicationItem({
  mode = "item",
  status,
  onCancel,
  application,
}: ApplicationItemProps) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<AddApplicationFormData>({
    resolver: zodResolver(addApplicationSchema),
    mode: "onChange",
  });
  const { addApplication, isLoading } = useAddApplication();

  function onSubmit(data: AddApplicationFormData) {
    if (data.title) {
      addApplication(
        { title: data?.title, status },
        {
          onSuccess: () => onCancel(),
        },
      );
    }
  }

  if (mode === "creating") {
    return (
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-surface px-2 py-4 rounded-md shadow-md text-on-surface flex flex-col gap-4"
      >
        <Input
          id="title"
          placeholder="Application title"
          error={errors.title?.message}
          {...register("title")}
        />

        <div className="flex gap-2 justify-end">
          <Button
            type="submit"
            size="small"
            disabled={!isValid}
            isLoading={isLoading}
          >
            Add
          </Button>

          <Button
            type="reset"
            size="small"
            variant="error"
            disabled={isLoading}
            onClick={onCancel}
          >
            Cancel
          </Button>
        </div>
      </form>
    );
  }

  return (
    <li
      className="bg-surface px-2 py-4 rounded-md shadow-md text-on-surface cursor-pointer"
      onClick={() =>
        navigate(routes.createRouteApplicationDetail(application.id))
      }
    >
      <h3>{application.company}</h3>
    </li>
  );
}

export default ApplicationItem;
