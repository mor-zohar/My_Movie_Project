import React from "react";
import MovieItem from "../componnets/MovieItem";
import "../css/Movies.css";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Movies = () => {
  const [sortedByTitle, setSortedByTitle] = useState(false);
  const [sortedByDate, setSortedByDate] = useState(false);
  const movies = useSelector((s) => s.movie.movies);
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    setMoviesData(movies);
  }, [movies]);

  const handleSortByTitle = () => {
    setSortedByTitle(!sortedByTitle);
    if (!sortedByTitle) {
      const sortedMovies = [...moviesData].sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      setMoviesData(sortedMovies);
    } else {
      const sortedMovies = [...moviesData].sort((a, b) =>
        b.title.localeCompare(a.title)
      );
      setMoviesData(sortedMovies);
    }
  };

  const handleSortByDate = () => {
    setSortedByDate(!sortedByDate);
    if (!sortedByDate) {
      const sortedMovies = [...moviesData].sort(
        (a, b) => new Date(a.release_date) - new Date(b.release_date)
      );
      setMoviesData(sortedMovies);
    } else {
      const sortedMovies = [...moviesData].sort(
        (a, b) => new Date(b.release_date) - new Date(a.release_date)
      );
      setMoviesData(sortedMovies);
    }
  };

  return (
    <div className="movies">
      <div className="Sort ">
        <button className="sortBtn btn" onClick={handleSortByTitle}>
          Sort By A-Z
        </button>
        <button className="sortBtn btn" onClick={handleSortByDate}>
          Sort By Realease Date
        </button>
      </div>

      <div className="movie">
        {moviesData.map((m) => (
          <MovieItem
            key={m.id}
            title={m.title}
            Date={m.release_date}
            movie={m}
          />
        ))}
      </div>
    </div>
  );
};

export default Movies;
