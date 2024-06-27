import { ITvShowList } from '@/hooks/useTvShow';
import { Card, CardContent } from '../ui/card';

interface IProps {
  tvShowResults: ITvShowList;
}

const TvShowsCard = ({ tvShowResults }: IProps) => {
  return (
    <Card className="border-0">
      <CardContent>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${tvShowResults.poster_path}`}
            alt="poster"
            className="hover:opacity-80 transition-all cursor-pointer"
          />
        </div>
        <h1 className="mt-3">
          {tvShowResults.title ? tvShowResults.title : tvShowResults.name}
        </h1>
      </CardContent>
    </Card>
  );
};

export default TvShowsCard;
