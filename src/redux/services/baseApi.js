import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL, API_AUTH_TOKEN } from "@constants";

export const baseApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    prepareHeaders: (headers) => {
      headers.set("Authorization", `Bearer ${API_AUTH_TOKEN}`);
    },
  }),
  endpoints: () => ({}),
});
