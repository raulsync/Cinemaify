import MovieCard from '@/components/MovieCard/MovieCard';
import { GenresContext } from '@/contexts/GenresContext';
import useMovies from '@/hooks/useMovies';
import { useContext } from 'react';

const MovieList = () => {
  const { genres } = useContext(GenresContext);
  const { movieList } = useMovies(genres);
  console.log(movieList);

  return (
    <div className="p-3 mb-4">
      <h1 className="p-5 text-4xl font-semibold py-8">Movies</h1>
      <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 gap-y-3">
        {movieList?.map((movie) => (
          <div key={movie.id}>
            <MovieCard movieResults={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
