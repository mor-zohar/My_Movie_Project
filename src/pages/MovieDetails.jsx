import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleFavorite } from "../features/MoviesSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../css/MovieDetails.css";

const MovieDetails = () => {
  const { movieId } = useParams();
  const dispatch = useDispatch();

  const mid = Number(movieId);

  const movie = useSelector((state) => state.movie.movies).find(
    (m) => m.id === mid
  );

  if (!movie) {
    return <Navigate to={`/movies/${movie.id}`} />;
  }

  return (
    <div className="allMovieDetails container">
      <ToastContainer position="top-right" />

      <h2>Details For : {movie.title}</h2>

      <div className="posterImg container">
        <img src={movie.poster_path} alt="poster" />
        <img src={movie.backdrop_path} alt="back" />
      </div>

      <div className="OverView">
        <h2>OverView:</h2>
        <p>{movie.overview}</p>
      </div>

      <div className="footer">Release Date : {movie.release_date}</div>

      <button
        className="btn1 border-0"
        onClick={(e) => {
          e.stopPropagation(); // עוצר את העברה מהאבא
          if (!movie.isFavorite) {
            toast.success("Added To Favorite", {});
          } else {
            toast.error("Removed From Favorite", {});
          }
          dispatch(toggleFavorite(movie.id));
        }}
      >
        {movie.isFavorite && <FaHeart title="Press To Remove From Favorite" />}
        {!movie.isFavorite && <FaRegHeart title="Press To Add To Favorite" />}
      </button>
    </div>
  );
};

export default MovieDetails;
