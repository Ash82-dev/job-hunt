import { useNavigate } from "react-router";
import { LuMenu as MenuIcon } from "react-icons/lu";

import Logo from "@/features/dashboard/components/Logo";
import Search from "@/features/dashboard/components/SearchBar";
import { routes } from "@/router/routes";

type AppHeaderProps = {
  onToggleSidebar: () => void;
};

function AppHeader({ onToggleSidebar }: AppHeaderProps) {
  const navigate = useNavigate();
  return (
    <header className="h-20 px-4 bg-background shadow-md flex items-center justify-between">
      <button className="md:hidden" onClick={onToggleSidebar}>
        <MenuIcon size={24} className="text-on-surface cursor-pointer" />
      </button>

      <div
        className="hidden md:block cursor-pointer"
        onClick={() => navigate(routes.dashboard)}
      >
        <Logo className="w-15" />
      </div>

      <Search />
    </header>
  );
}

export default AppHeader;
