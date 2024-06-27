import apiClient from '@/services/api-client';
import { useEffect, useState } from 'react';

export interface ITvShowList {
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

const useTvShow = () => {
  const [tvShows, setTvShows] = useState<ITvShowList[]>([]);
  const fetchTvShowList = async () => {
    try {
      const res = await apiClient.get('/discover/tv');
      setTvShows(res.data.results);
      // console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTvShowList();
  }, []);
  return { tvShows };
};

export default useTvShow;
