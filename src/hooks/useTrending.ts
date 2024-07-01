import apiClient from '@/services/api-client';
import { useEffect, useState } from 'react';

export interface ITrending {
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

export const useTrending = (trending: string = 'movie') => {
  const [trendingshw, setTrendingShw] = useState<ITrending[]>([]);

  const fetchTrending = async () => {
    try {
      const res = await apiClient.get(`/trending/${trending}/day`);
      setTrendingShw(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTrending();
  }, [trending]);
  return { trendingshw, setTrendingShw };
};
