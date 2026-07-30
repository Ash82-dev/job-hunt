import { useState } from "react";
import {
  DndContext,
  DragOverlay,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
  type DragStartEvent,
  type DragEndEvent,
} from "@dnd-kit/core";
import { FaGripVertical as GripIcon } from "react-icons/fa6";

import Board from "@/features/dashboard/components/Board";
import { useApplicationSummary } from "@/features/dashboard/hooks/useApplicationSummary";
import { useUpdateApplicationStatus } from "@/features/dashboard/hooks/useUpdateApplicationStatus";
import type {
  ApplicationStatus,
  ApplicationSummaryResponse,
} from "@/features/application/types/application.types";
import { useSearch } from "../contexts/useSearch";
import Spinner from "@/components/Spinner";
import Error from "@/components/Error";

const columns = [
  { title: "Applied", status: "applied" },
  { title: "Interview", status: "interview" },
  { title: "Rejected", status: "rejected" },
];

const validStatuses: ApplicationStatus[] = ["applied", "interview", "rejected"];

function Dashboard() {
  const { query } = useSearch();
  const { applicationsSummary, isLoading, error, refetch } =
    useApplicationSummary();
  const { updateApplicationStatus } = useUpdateApplicationStatus();

  const [activeApplication, setActiveApplication] =
    useState<ApplicationSummaryResponse | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
  );

  const filteredApplicationsSummary = query
    ? applicationsSummary.filter((app) =>
        app.company.toLowerCase().includes(query.toLowerCase()),
      )
    : applicationsSummary;

  function handleDragStart(event: DragStartEvent) {
    const { active } = event;
    const app = filteredApplicationsSummary.find(
      (a) => a.id === active.id,
    );
    setActiveApplication(app ?? null);
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    setActiveApplication(null);

    if (!over) return;

    const applicationId = active.id as string;
    const newStatus = over.id as ApplicationStatus;

    if (!validStatuses.includes(newStatus)) return;

    const app = filteredApplicationsSummary.find(
      (a) => a.id === applicationId,
    );
    if (!app || app.status === newStatus) return;

    updateApplicationStatus({ id: applicationId, status: newStatus });
  }

  if (isLoading) return <Spinner />;

  if (error) return <Error message={error?.message} onRetry={refetch} />;

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className="flex items-center h-full gap-4 p-4 overflow-x-auto">
        {columns.map((column) => (
          <Board
            key={column.status}
            title={column.title}
            status={column.status as ApplicationStatus}
            applications={filteredApplicationsSummary.filter(
              (app) => app.status === column.status,
            )}
          />
        ))}
      </div>

      <DragOverlay dropAnimation={{ duration: 200 }}>
        {activeApplication ? (
          <div className="bg-surface px-3 py-4 rounded-md shadow-xl text-on-surface flex items-center gap-2 w-80 opacity-95">
            <GripIcon className="text-on-surface-variant/50 shrink-0" />
            <h3 className="truncate font-medium">{activeApplication.company}</h3>
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
}

export default Dashboard;
