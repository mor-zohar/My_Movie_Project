import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../features/MoviesSlice";

const Store = configureStore({
  reducer: {
    movie: moviesReducer,
  },
});

export default Store;
