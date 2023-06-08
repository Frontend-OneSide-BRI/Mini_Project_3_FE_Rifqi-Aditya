import { TMDB_IMG_BASE_URL } from "@constants";
import { sliceArray } from "@utils";
import { useNavigate } from "react-router-dom";

const Card = ({ results }) => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-[repeat(5,minmax(auto,1fr))] 2xl:grid-rows-[repeat(auto-fit,minmax(auto,400px))] gap-10">
      {sliceArray(results, 0, 5).map((res, i) => (
        <div
          className="hover:cursor-pointer"
          key={i}
          onClick={() => navigate(`/movie/${res.id}`)}
        >
          <img
            className="w-full h-full object-cover"
            src={`${TMDB_IMG_BASE_URL}${res.poster_path}`}
            alt={res.title}
          />
        </div>
      ))}
    </div>
  );
};

export default Card;
