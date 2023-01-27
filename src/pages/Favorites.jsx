import React from "react";
import { useSelector } from "react-redux";
import MovieItem from "../componnets/MovieItem";
import "../css/Favorites.css";

const Favorites = () => {
  const movies = useSelector((s) => s.movie.movies).filter((m) => m.isFavorite);

  return (
    <div className="page1 container">
      {movies.map((m) => (
        <MovieItem key={m.id} movie={m} />
      ))}
    </div>
  );
};

export default Favorites;
