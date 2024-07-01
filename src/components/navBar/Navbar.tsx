import { Link, useNavigate } from 'react-router-dom';
import { Input } from '../ui/input';
import logo from './../../assets/logo.png';
import Genres from '../Genres/Genres';
import React, { useContext } from 'react';
import { SearchResult } from '@/contexts/searchFilter';

const Navbar = () => {
  const navigate = useNavigate();
  const { query, setQuery } = useContext(SearchResult);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    //after setting the value we navigate to the search page
    navigate(`/search/${e.target.value}`);

    if (e.target.value.length === 0) {
      navigate('/movies');
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // after hitting enter we redirect to search page
    navigate(`/search/${query}`);
  };

  console.log(query);
  return (
    <div className="flex justify-between items-center md:px-10 sm:px-5 px-5 my-3 text-xl gap-3">
      <img
        className=" h-9 md:h-14 sm:h-9 hover:opacity-70 cursor-pointer"
        src={logo}
        alt="logo"
        onClick={() => navigate('/')}
      />

      <div className=" flex gap-3 items-center ">
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="search"
            className=" border-gray-400 rounded-2xl md:w-fit sm:w-[30vw]  outline-none shadow-slate-700"
            value={query}
            onChange={handleSearch}
          />
        </form>
        <div className=" md:block sm:hidden">
          <div className="flex gap-6 items-center">
            <Genres />
            <Link to={'/movies'}>
              <div>Movies</div>
            </Link>
            <Link to={'/shows'}>
              <div>TvShows</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
