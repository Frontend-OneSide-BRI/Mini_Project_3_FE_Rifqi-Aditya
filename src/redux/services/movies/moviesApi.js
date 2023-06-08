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
      query: (movieId) => `/3/movie/${movieId}`,
    }),
    searchMovie: builder.query({
      query: (searchQuery) =>
        `/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US`,
    }),
    getTopRatedMovies: builder.query({
      query: (page) => `/3/movie/top_rated?language=en-US&page=${page}`,
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetNowPlayingMoviesQuery,
  useGetUpcomingMoviesQuery,
  useGetPopularMoviesQuery,
  useGetMovieDetailQuery,
  useSearchMovieQuery,
  useGetTopRatedMoviesQuery,
} = moviesApi;
