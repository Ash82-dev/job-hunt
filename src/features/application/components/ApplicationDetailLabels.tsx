import Label from "@/components/Label";
import type { Application } from "../types/application.types";
import capitalize from "@/utils/capitalize";

type ApplicationDetailLabelsProps = {
  application: Application;
};

function ApplicationDetailLabels({
  application,
}: ApplicationDetailLabelsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-12">
      <Label title="Company" description={capitalize(application.company)} />

      <Label title="Status" description={capitalize(application.status)} />

      <Label title="Position" description={capitalize(application.position)} />

      <Label title="Salary" description={application.salary} />

      <Label title="Level" description={capitalize(application.level)} />

      <Label title="Work mode" description={capitalize(application.workMode)} />

      <Label title="Location" description={capitalize(application.location)} />

      <Label title="Resume Version" description={application.resumeVersion} />

      <Label
        title="Application link"
        description={
          <a
            href={application.applicationLink}
            target="_blank"
            className="underline hover:text-primary"
          >
            Company website
          </a>
        }
      />

      <Label title="Applied Date" description={application.appliedDate} />

      {application.interviewDate && (
        <Label title="Interview Date" description={application.interviewDate} />
      )}

      {application.rejectedDate && (
        <Label title="Rejected Date" description={application.rejectedDate} />
      )}

      <Label
        title="Notes"
        description={capitalize(application.notes)}
        styles="sm:col-span-2"
      />
    </div>
  );
}

export default ApplicationDetailLabels;
