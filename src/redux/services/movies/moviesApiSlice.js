import { createSlice } from "@reduxjs/toolkit";
import { moviesApi } from "@services/movies/moviesApi";

const dataSlice = createSlice({
  name: "movieData",
  initialState: {
    filteredMovieData: [],
    currPage: 1,
  },
  reducers: {
    setCurrPage: (state, action) => state.currPage(action.payload),
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      moviesApi.endpoints.searchMovie.matchFulfilled,
      (state, { payload }) => {
        state.filteredMovieData = payload.results;
      }
    );
  },
});

export default dataSlice.reducer;
