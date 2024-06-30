import { Link } from 'react-router-dom';
import { Input } from '../ui/input';
import logo from './../../assets/logo.png';
import Genres from '../Genres/Genres';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center md:px-10 sm:px-5 px-5 my-3 text-xl gap-3">
      <img
        className=" h-9 md:h-14 sm:h-9 hover:opacity-70 cursor-pointer"
        src={logo}
        alt="logo"
      />

      <div className=" flex gap-3 items-center ">
        <form action="">
          <Input
            type="text"
            placeholder="search"
            className=" border-gray-400 rounded-2xl md:w-fit sm:w-[30vw]  outline-none shadow-slate-700"
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
