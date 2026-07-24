import { BiLogOut as LogoutIcon } from "react-icons/bi";

import { routes } from "@/router/routes";
import AppSideBarItem from "./AppSideBarItem";
import Button from "./Button";
import { useLogout } from "@/features/auth/hooks/useLogout";

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

function AppSideBar() {
  const { logout, isLoading } = useLogout();

  return (
    <aside className="h-full flex-col gap-2 bg-surface-variant min-w-70 px-5 py-10 hidden md:flex">
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
  );
}

export default AppSideBar;
