import { LuMenu as MenuIcon } from "react-icons/lu";
import Logo from "@/features/dashboard/components/Logo";
import Search from "@/features/dashboard/components/SearchBar";

type AppHeaderProps = {
  onToggleSidebar: () => void;
};

function AppHeader({ onToggleSidebar }: AppHeaderProps) {
  return (
    <header className="h-20 px-4 bg-background shadow-md flex items-center justify-between">
      <button className="sm:hidden" onClick={onToggleSidebar}>
        <MenuIcon size={24} className="text-on-surface cursor-pointer" />
      </button>

      <div className="hidden sm:block">
        <Logo />
      </div>

      <Search />
    </header>
  );
}

export default AppHeader;
