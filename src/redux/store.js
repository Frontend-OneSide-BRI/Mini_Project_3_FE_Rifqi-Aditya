import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { moviesApi } from "@services/movies/moviesApi";
import dataReducer from "@services/movies/moviesApiSlice";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    filteredMovieData: dataReducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
  },
  //required for RTK Query to work
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
