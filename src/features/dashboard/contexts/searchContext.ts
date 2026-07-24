import { createContext } from "react";

type SearchContextValue = {
  query: string;
  setQuery: (query: string) => void;
};

export const SearchContext = createContext<SearchContextValue | null>(null);
