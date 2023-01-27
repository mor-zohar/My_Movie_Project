import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../features/MoviesSlice";

const useMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);
};

export default useMovies;
