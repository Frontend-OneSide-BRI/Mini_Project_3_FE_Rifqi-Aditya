import { baseApi } from "@services/baseApi";

export const moviesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getNowPlayingMovies: builder.query({
      query: () => "/3/movie/now_playing",
    }),
    getUpcomingMovies: builder.query({
      query: () => "/3/movie/upcoming",
    }),
    getPopularMovies: builder.query({
      query: () => "/3/movie/popular",
    }),
    getMovieDetail: builder.query({
      query: (movieId) => `https://api.themoviedb.org/3/movie/${movieId}`,
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetNowPlayingMoviesQuery,
  useGetUpcomingMoviesQuery,
  useGetPopularMoviesQuery,
  useGetMovieDetailQuery,
} = moviesApi;
