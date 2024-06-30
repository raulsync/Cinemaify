import { createContext, useState } from 'react';

export const GenresContext = createContext<{
  genres: null | number;
  setGenres: (data: number) => void;
}>({
  genres: null,
  setGenres: () => {},
});

export const GenreProvider = ({ children }: { children: React.ReactNode }) => {
  const [genres, setGenres] = useState(null);
  const values = { genres, setGenres };
  return (
    <GenresContext.Provider value={values}>{children}</GenresContext.Provider>
  );
};
