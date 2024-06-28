import MovieList from './pages/MovieList/MovieList';
import Navbar from './components/navBar/Navbar';
import { Routes, Route } from 'react-router-dom';
import TvshowList from './pages/TvshowList/TvshowList';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* <Route path='/' element = {<Trending/>}/> */}
        <Route
          path="/movies"
          element={<MovieList />}
        />
        <Route
          path="/shows"
          element={<TvshowList />}
        />
      </Routes>
    </>
  );
}

export default App;
