import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaRegTrashAlt as DeleteIcon } from "react-icons/fa";
import { FaGripVertical as GripIcon } from "react-icons/fa6";
import { useDraggable } from "@dnd-kit/core";

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
import { useDeleteApplication } from "../hooks/useDeleteApplication";
import capitalize from "@/utils/capitalize";

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
  const { addApplication, isLoading: isAdding } = useAddApplication();
  const { deleteApplication, isLoading: isDeleting } = useDeleteApplication();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<AddApplicationFormData>({
    resolver: zodResolver(addApplicationSchema),
    mode: "onChange",
  });

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

  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: application?.id ?? "creating-placeholder",
    disabled: mode === "creating",
  });

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
          autoFocus
        />

        <div className="flex gap-2 justify-end">
          <Button
            type="submit"
            size="small"
            disabled={!isValid}
            isLoading={isAdding}
          >
            Add
          </Button>

          <Button
            type="reset"
            size="small"
            variant="error"
            disabled={isAdding}
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
      ref={setNodeRef}
      className={`bg-surface px-3 py-4 rounded-md shadow-md text-on-surface cursor-pointer flex items-center gap-2 transition-opacity ${isDragging ? "opacity-40" : ""}`}
      onClick={() =>
        navigate(routes.createRouteApplicationDetail(application.id))
      }
      {...listeners}
      {...attributes}
    >
      <GripIcon className="text-on-surface-variant/60 shrink-0 cursor-grab" />
      <h3 className="truncate flex-1">{capitalize(application.company)}</h3>
      <Button
        variant="error"
        size="raw"
        className="p-1.5 shrink-0"
        isLoading={isDeleting}
        onClick={(e) => {
          e.stopPropagation();
          deleteApplication(application.id);
        }}
      >
        <DeleteIcon size={20} className="text-on-error" />
      </Button>
    </li>
  );
}

export default ApplicationItem;
