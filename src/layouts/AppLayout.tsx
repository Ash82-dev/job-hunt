import { Outlet } from "react-router";
import AppHeader from "@/components/AppHeader";

function AppLayout() {
  return (
    <div className="h-screen w-screen bg-surface">
      <AppHeader />

      <main className="h-fit">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
