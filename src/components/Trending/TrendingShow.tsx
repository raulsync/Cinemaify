import { useTrending } from '@/hooks/useTrending';
import { MdOutlineExpandMore } from 'react-icons/md';
import TvShowsCard from '../tvShowsCard/TvShowsCard';
import { useState } from 'react';

const TrendingShow = () => {
  const [fold, setFold] = useState<boolean>(false);

  const { trendingshw } = useTrending('tv');

  return (
    <div className="p-3 mb-4">
      <div
        className="flex items-center cursor-pointer"
        onClick={() => setFold(!fold)}
      >
        <h1 className="text-4xl font-semibold p-5 py-8">Trending Show</h1>
        <span className="text-4xl text-gray-400">
          <MdOutlineExpandMore />
        </span>
      </div>
      <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 gap-y-3">
        {fold &&
          trendingshw?.map((tvshow) => (
            <div key={tvshow.id}>
              <TvShowsCard tvShowResults={tvshow} />
            </div>
          ))}
        {!fold &&
          trendingshw?.slice(0, 10).map((tvshow) => (
            <div key={tvshow.id}>
              <TvShowsCard tvShowResults={tvshow} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default TrendingShow;
