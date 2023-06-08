import { TMDB_IMG_BASE_URL } from "@constants";
import { sliceArray } from "@utils";
import { useNavigate } from "react-router-dom";

const Card = ({ results, renderAll = false }) => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-[repeat(5,minmax(auto,1fr))] 2xl:grid-rows-[repeat(auto-fit,minmax(auto,400px))] gap-10">
      {renderAll
        ? results.map((res, i) => (
            <div
              className="hover:cursor-pointer"
              key={i}
              onClick={() => navigate(`/movie/${res.id}`)}
            >
              <div className="group bg-gradient-to-b from-black to-black relative overflow-hidden">
                <div className="transition-opacity ease-in-out duration-300 opacity-100 group-hover:opacity-60">
                  <img
                    className="w-full h-full object-cover"
                    src={`${TMDB_IMG_BASE_URL}${res.poster_path}`}
                    alt={res.title}
                  />
                </div>
                <p className="absolute bottom-1 left-2 text-white text-xs sm:text-sm transition-opacity ease-in-out duration-300 opacity-0 group-hover:opacity-100">
                  {res.title || ""}
                </p>
              </div>
            </div>
          ))
        : sliceArray(results, 0, 8).map((res, i) => (
            <div
              className="hover:cursor-pointer"
              key={i}
              onClick={() => navigate(`/movie/${res.id}`)}
            >
              <div className="group bg-gradient-to-b from-black to-black relative overflow-hidden">
                <div className="transition-opacity ease-in-out duration-300 opacity-100 group-hover:opacity-60">
                  <img
                    className="w-full h-full object-cover"
                    src={`${TMDB_IMG_BASE_URL}${res.poster_path}`}
                    alt={res.title}
                  />
                </div>
                <p className="absolute bottom-1 left-2 text-white text-xs sm:text-sm transition-opacity ease-in-out duration-300 opacity-0 group-hover:opacity-100">
                  {res.title || ""}
                </p>
              </div>
            </div>
          ))}
    </div>
  );
};

export default Card;
