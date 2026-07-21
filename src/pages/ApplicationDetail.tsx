import ApplicationDetailForm from "@/features/application/components/ApplicationDetailForm";
import ApplicationHeader from "@/features/application/components/ApplicationHeader";

function ApplicationDetail() {
  return (
    <section className="flex flex-col gap-8 px-4 py-6">
      <ApplicationHeader />

      <ApplicationDetailForm />
    </section>
  );
}

export default ApplicationDetail;
