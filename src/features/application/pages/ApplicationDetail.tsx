import { useParams } from "react-router";
import { MdEdit as EditIcon } from "react-icons/md";

import { useApplication } from "../hooks/useApplication";

import ApplicationDetailForm from "../components/ApplicationDetailForm";
import ApplicationHeader from "../components/ApplicationDetailHeader";
import Spinner from "@/components/Spinner";
import Error from "@/components/Error";
import { useState } from "react";
import ApplicationDetailLabels from "../components/ApplicationDetailLabels";
import Button from "@/components/Button";

function ApplicationDetail() {
  const { id } = useParams();
  const { application, isLoading, error, refetch } = useApplication(id);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleStartEdit = () => setIsEditing(true);
  const handleFinishEdit = () => setIsEditing(false);

  if (isLoading) return <Spinner />;

  if (error) return <Error message={error.message} onRetry={refetch} />;

  return (
    <section className="flex flex-col gap-8 h-full">
      <div className="flex flex-col px-4 py-6 gap-15">
        <ApplicationHeader title={application.company}>
          {!isEditing ? (
            <Button
              size="small"
              className="flex gap-2"
              onClick={handleStartEdit}
            >
              <EditIcon />
              <span>Edit</span>
            </Button>
          ) : (
            <Button variant="error" size="small" onClick={handleFinishEdit}>
              Cancel
            </Button>
          )}
        </ApplicationHeader>

        {isEditing ? (
          <ApplicationDetailForm
            id={id}
            application={application}
            onUpdate={handleFinishEdit}
          />
        ) : (
          <ApplicationDetailLabels application={application} />
        )}
      </div>
    </section>
  );
}

export default ApplicationDetail;
