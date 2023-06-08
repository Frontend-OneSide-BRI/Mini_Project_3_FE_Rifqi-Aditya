import { useSelector } from "react-redux";
import { useSearchMovieQuery } from "@redux/services/movies/moviesApi";
import { useState } from "react";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { data, isLoading } = useSearchMovieQuery(searchQuery);
  const filteredArr = useSelector((state) => state.filteredMovieData);

  return (
    <form className="flex items-center">
      <label for="simple-search" className="sr-only">
        Search
      </label>
      <div className="relative w-full mx-5 sm:mx-0">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <input
          type="text"
          id="simple-search"
          className="bg-stone-700 border border-gray-300 text-sm rounded-lg block w-full pl-10 p-2.5 bg-gray-70 border-gray-60 placeholder-gray-40 text-white focus:outline-none"
          placeholder="Search Movies"
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />
      </div>
    </form>
  );
};

export default SearchBar;
