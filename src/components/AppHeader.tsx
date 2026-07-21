import Logo from "@/features/dashboard/components/Logo";
// import NavBarIcons from "@/features/dashboard/components/NavBarIcons";
import Search from "@/features/dashboard/components/SearchBar";

function AppHeader() {
  return (
    <header className="h-20 px-4 bg-background shadow-md flex items-center justify-between">
      <Logo />
      <Search />
      {/* <NavBarIcons /> */}
    </header>
  );
}

export default AppHeader;
