import MovieCard from '@/components/MovieCard/MovieCard';
import TvShowsCard from '@/components/tvShowsCard/TvShowsCard';
import { SearchResult } from '@/contexts/searchFilter';
import { useMultiSearch } from '@/hooks/useMultiSearch';
import { useContext } from 'react';
const SearchList = () => {
  const { query, queryData } = useContext(SearchResult);
  useMultiSearch(query);
  console.log(queryData);

  return (
    <div className=" grid lg:grid-cols-5 md: grid-cols-4 sm:grid-cols-2 gap-y-3">
      {queryData?.map((data) => (
        <div key={data.id}>
          {data.media_type === 'movie' ? (
            <MovieCard movieResults={data} />
          ) : (
            <TvShowsCard tvShowResults={data} />
          )}
        </div>
      ))}
    </div>
  );
};

export default SearchList;
