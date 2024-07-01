import { SearchResult } from '@/contexts/searchFilter';
import apiClient from '@/services/api-client';
import { useContext, useEffect } from 'react';

export const useMultiSearch = (inputValue: string) => {
  const { setQueryData } = useContext(SearchResult);

  const fetchMultiSearch = async () => {
    try {
      const res = await apiClient.get('/search/multi', {
        params: {
          query: inputValue,
        },
      });
      setQueryData(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMultiSearch();
  }, [inputValue]);
};
