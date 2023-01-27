import "./App.css";
import { Routes, Route } from "react-router-dom";
import Movies from "./pages/Movies";
import Favorites from "./pages/Favorites";
import About from "./pages/About";
import MovieDetails from "./pages/MovieDetails";
import TopNav from "./componnets/nav/TopNav";
import useMovies from "./hooks/UseMovies";

function App() {
  useMovies();

  return (
    <div className="app">
      <TopNav />
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/about" element={<About />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
      </Routes>
    </div>
  );
}

export default App;
