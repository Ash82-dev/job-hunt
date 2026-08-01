import Label from "@/components/Label";
import type { Application } from "../types/application.types";

type ApplicationDetailLabelsProps = {
  application: Application;
};

function ApplicationDetailLabels({
  application,
}: ApplicationDetailLabelsProps) {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-y-15">
      <Label title="Company" description={application.company} />

      <Label title="Status" description={application.status} />

      <Label title="Position" description={application.position} />

      <Label title="Salary" description={application.salary} />

      <Label title="Level" description={application.level} />

      <Label title="Work mode" description={application.workMode} />

      <Label
        title="Application link"
        description={application.applicationLink}
      />

      <Label title="Location" description={application.location} />

      <Label title="Resume Version" description={application.resumeVersion} />

      <Label title="Applied Date" description={application.appliedDate} />

      <Label title="Interview Date" description={application.interviewDate} />

      <Label title="Rejected Date" description={application.rejectedDate} />

      <Label title="Notes" description={application.notes} />
    </div>
  );
}

export default ApplicationDetailLabels;
