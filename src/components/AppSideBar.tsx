import { useEffect } from "react";
import { useLocation } from "react-router";
import { BiLogOut as LogoutIcon } from "react-icons/bi";
import { LuX as CloseIcon } from "react-icons/lu";

import { routes } from "@/router/routes";
import AppSideBarItem from "./AppSideBarItem";
import Button from "./Button";
import { useLogout } from "@/features/auth/hooks/useLogout";
import Logo from "@/features/dashboard/components/Logo";

type SideBarItems = {
  label: string;
  route: string;
};

const sideBarItems: SideBarItems[] = [
  {
    label: "Dashboard",
    route: routes.dashboard,
  },
  {
    label: "Settings",
    route: routes.settings,
  },
];

type AppSideBarProps = {
  isOpen: boolean;
  onClose: () => void;
};

function AppSideBar({ isOpen, onClose }: AppSideBarProps) {
  const location = useLocation();
  const { logout, isLoading } = useLogout();

  useEffect(() => {
    onClose();
    // eslint-disable-next-line
  }, [location.pathname]);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed inset-y-0 left-0 z-50
          flex w-70 flex-col gap-2
          bg-surface-variant px-5 py-5
          transition-transform duration-300
          border-r-2 border-background

          ${isOpen ? "translate-x-0" : "-translate-x-full"}

          lg:static
          lg:translate-x-0
          lg:shrink-0
        `}
      >
        <div className="mb-2 flex items-center justify-between lg:hidden">
          <Logo className="w-15" />

          <button
            onClick={onClose}
            className="rounded-sm p-2 text-on-surface cursor-pointer"
          >
            <CloseIcon size={22} />
          </button>
        </div>

        {sideBarItems.map((item) => (
          <AppSideBarItem
            label={item.label}
            route={item.route}
            key={item.label}
          />
        ))}

        <Button
          className={`p-2 rounded-sm mt-auto flex items-center gap-2`}
          variant="error"
          isLoading={isLoading}
          onClick={() => logout()}
        >
          <LogoutIcon size={20} />
          Logout
        </Button>
      </aside>
    </>
  );
}

export default AppSideBar;
