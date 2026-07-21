import { Outlet } from "react-router";
import AppHeader from "@/components/AppHeader";
import AppSideBar from "@/components/AppSideBar";

function AppLayout() {
  return (
    <main className="flex h-dvh flex-col bg-surface">
      <AppHeader />

      <div className="flex min-h-0 flex-1">
        <AppSideBar />

        <div className="min-w-0 flex-1 overflow-auto">
          <Outlet />
        </div>
      </div>
    </main>
  );
}

export default AppLayout;
