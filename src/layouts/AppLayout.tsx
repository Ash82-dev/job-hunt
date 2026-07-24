import { Outlet } from "react-router";
import AppHeader from "@/components/AppHeader";
import AppSideBar from "@/components/AppSideBar";
import { useState } from "react";
import SearchProvider from "@/features/dashboard/contexts/SearchProvider";

function AppLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <SearchProvider>
      <main className="flex h-dvh flex-col bg-surface">
        <AppHeader onToggleSidebar={() => setIsSidebarOpen((o) => !o)} />

        <div className="flex min-h-0 flex-1">
          <AppSideBar
            isOpen={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
          />

          <div className="min-w-0 flex-1 overflow-auto">
            <Outlet />
          </div>
        </div>
      </main>
    </SearchProvider>
  );
}

export default AppLayout;
