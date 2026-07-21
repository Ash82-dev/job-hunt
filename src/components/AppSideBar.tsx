import { routes } from "@/router/routes";
import AppSideBarItem from "./AppSideBarItem";

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
  return (
    <aside className="h-full flex-col gap-2 bg-surface-variant min-w-70 px-5 py-10 hidden md:flex">
      {sideBarItems.map((item) => (
        <AppSideBarItem
          label={item.label}
          route={item.route}
          key={item.label}
        />
      ))}
    </aside>
  );
}

export default AppSideBar;
