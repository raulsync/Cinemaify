import { createContext, useState } from 'react';

export const SearchResult = createContext<{
  query: string;
  setQuery: (data: string) => void;
}>({
  query: '',
  setQuery: () => {},
});

export const SearchResultProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [query, setQuery] = useState('');
  const [queryData, setQueryData] = useState();
  const values = { query, setQuery, queryData, setQueryData };

  return (
    <SearchResult.Provider value={values}>{children}</SearchResult.Provider>
  );
};
