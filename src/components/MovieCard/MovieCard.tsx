import { IMovieResults } from '@/hooks/useMovies';
import { Card, CardContent } from '../ui/card';
import { useNavigate } from 'react-router-dom';

interface IProps {
  movieResults: IMovieResults;
}

const MovieCard = ({ movieResults }: IProps) => {
  const navigate = useNavigate();

  return (
    <Card
      className="border-0"
      onClick={() => navigate(`/player/${movieResults.id}`)}
    >
      <CardContent>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${movieResults.poster_path}`}
            alt="poster"
            className=" hover:opacity-75 transition-all cursor-pointer"
          />
          <h1 className="mt-3">
            {movieResults.title ? movieResults.title : movieResults.name}
          </h1>
        </div>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
