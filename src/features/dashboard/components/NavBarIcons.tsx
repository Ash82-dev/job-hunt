import { routes } from "@/router/routes";
import { LuSettings as SettingsIcon } from "react-icons/lu";
import { useNavigate } from "react-router";

function NavBarIcons() {
  const navigate = useNavigate();

  return (
    <nav className="hidden sm:block">
      <button
        className="cursor-pointer"
        onClick={() => navigate(routes.settings)}
      >
        <SettingsIcon size={30} className="text-primary" />
      </button>
    </nav>
  );
}

export default NavBarIcons;
