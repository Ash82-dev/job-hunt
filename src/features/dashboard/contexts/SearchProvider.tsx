import { useState, type ReactNode } from "react";
import { SearchContext } from "./searchContext";

type SearchProviderProps = {
  children: ReactNode;
};

function SearchProvider({ children }: SearchProviderProps) {
  const [query, setQuery] = useState<string>();

  return (
    <SearchContext.Provider value={{ query, setQuery }}>
      {children}
    </SearchContext.Provider>
  );
}

export default SearchProvider;
