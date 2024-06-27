import apiClient from '@/services/api-client';
import { useEffect, useState } from 'react';

export interface IMovieResults {
  adult: boolean;
  id: number;
  original_language: string;
  original_title: string;
  title: string;
  backdrop_path: string;
  poster_path: string;
  overview: string;
  name?: string;
}

const useMovies = () => {
  const [movieList, setMovieList] = useState<IMovieResults[]>([]);

  const fetchMovieList = async () => {
    try {
      const res = await apiClient.get('/discover/movie');
      setMovieList(res?.data?.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchMovieList();
  }, []);
  return { movieList };
};

export default useMovies;
