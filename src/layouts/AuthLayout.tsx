import { Outlet } from "react-router";

function AuthLayout() {
  return (
    <main className="bg-background w-screen h-screen flex items-center px-4 justify-center">
      <div className="max-w-lg grow rounded-md shadow-xl bg-surface px-6 py-8">
        <Outlet />
      </div>
    </main>
  );
}

export default AuthLayout;
