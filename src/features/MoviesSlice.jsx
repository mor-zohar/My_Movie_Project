import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const movieUrl =
  "https://api.themoviedb.org/3/movie/popular?api_key=9417db2eda3bdbce9206950876cb11e9&language=en-US&page=1";

const imgUrl = (image_path) =>
  `https://image.tmdb.org/t/p/original${image_path}`;

const initialState = {
  movies: [],
  error: "",
  loading: false,
};

export const fetchMovies = createAsyncThunk("movie/fetch", () => {
  return fetch(movieUrl)
    .then((response) => response.json())
    .then((json) => json.results)
    .then((movies) =>
      movies.map((m) => ({
        ...m,
        poster_path: imgUrl(m.poster_path),
        backdrop_path: imgUrl(m.backdrop_path),
        isFavorite: false,
      }))
    );
});

const MoviesSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    addMovies: (state, action) => {
      state.movies = action.payload;
    },
    toggleFavorite: (state, { payload }) => {
      const index = state.movies.findIndex((m) => m.id === payload);

      if (index !== -1) {
        state.movies[index].isFavorite = !state.movies[index].isFavorite;
      }
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state) => {
      state.loading = true;
      state.movies = [];
      state.error = "";
    });

    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.loading = false;
      state.movies = action.payload;
      state.error = "";
    });

    builder.addCase(fetchMovies.rejected, (state, action) => {
      state.loading = false;
      state.movies = [];
      state.error = action.error ?? "Something Went Wrong";
    });
  },
});
export default MoviesSlice.reducer;
export const { toggleFavorite, addMovies } = MoviesSlice.actions;
