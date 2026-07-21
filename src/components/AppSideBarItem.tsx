import { NavLink } from "react-router";

type AppSideBarProps = {
  label: string;
  route: string;
};

function AppSideBarItem({ label, route }: AppSideBarProps) {
  return (
    <NavLink
      to={route}
      className={({ isActive }) =>
        `p-2 rounded-sm ${
          isActive
            ? "bg-surface text-on-surface shadow-sm"
            : "text-on-surface hover:text-on-surface hover:bg-surface"
        }`
      }
    >
      {label}
    </NavLink>
  );
}

export default AppSideBarItem;
