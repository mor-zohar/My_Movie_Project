import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleFavorite } from "../features/MoviesSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import "../css/MovieItem.css";
import { Card } from "react-bootstrap";
import moment from "moment";

const MovieItem = ({ movie }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Card
      title="Click To See More Details"
      onClick={() => {
        navigate(`/movies/${movie.id}`);
      }}
      className="card"
    >
      <ToastContainer closeOnClick position="top-right" />

      <button
        className="btnFa"
        onClick={(e) => {
          e.stopPropagation();
          if (!movie.isFavorite) {
            toast.success("Added To Favorite", { closeOnClick: true });
          } else {
            toast.error("Removed From Favorite", { closeOnClick: true });
          }
          dispatch(toggleFavorite(movie.id));
        }}
      >
        <div className="FaBtn">
          {movie.isFavorite && (
            <FaHeart title="Press To Remove From Favorite" />
          )}
          {!movie.isFavorite && <FaRegHeart title="Press To Add To Favorite" />}
        </div>
      </button>

      <Card.Img
        className="img"
        variant="top"
        src={movie.poster_path}
        alt="poster"
      />

      <Card.Body className="body">
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text className="date">
          Release Date: {moment(movie.release_date).format("DD-MM-YYYY")}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MovieItem;
