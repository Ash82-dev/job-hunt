import { LuSearch } from "react-icons/lu";
import Input from "@/components/Input";
import { useSearch } from "../contexts/useSearch";

export default function Search() {
  const { query, setQuery } = useSearch();

  return (
    <form className="flex items-center w-60 sm:w-100 md:w-150">
      <Input
        id="search"
        placeholder="Search applications"
        leadingIcon={<LuSearch size={20} className="text-primary" />}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}
