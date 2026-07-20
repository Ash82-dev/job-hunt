import { Outlet } from "react-router";
import AppHeader from "@/components/AppHeader";

function AppLayout() {
  return (
    <div className="h-screen w-screen bg-surface flex flex-col">
      <AppHeader />

      <main className="grow">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
