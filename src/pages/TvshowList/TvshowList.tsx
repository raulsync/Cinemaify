import TvShowsCard from '@/components/tvShowsCard/TvShowsCard';
import useTvShow from '@/hooks/useTvShow';

const TvshowList = () => {
  const { tvShows } = useTvShow();
  console.log(tvShows);

  return (
    <div className="p-3 mb-4">
      <h1 className="p-5  font-semibold text-4xl py-8">TvShows</h1>
      <div className="grid lg:grid-cols-5 md:grid-cols-4 sm: grid-cols-2 gap-y-3">
        {tvShows.map((shows) => (
          <div key={shows.id}>
            <TvShowsCard tvShowResults={shows} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TvshowList;
