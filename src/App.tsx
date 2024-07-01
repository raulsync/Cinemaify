import MovieList from './pages/MovieList/MovieList';
import Navbar from './components/navBar/Navbar';
import { Routes, Route } from 'react-router-dom';
import TvshowList from './pages/TvshowList/TvshowList';
import SearchList from './pages/SearchList/SearchList';
import Home from './pages/Home/Home';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/movies"
          element={<MovieList />}
        />
        <Route
          path="/shows"
          element={<TvshowList />}
        />
        <Route
          path="/search/:searchid"
          element={<SearchList />}
        />
      </Routes>
    </>
  );
}

export default App;
