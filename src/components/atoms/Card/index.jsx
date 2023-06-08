import { TMDB_IMG_BASE_URL } from "@constants";
import { sliceArray } from "@utils";

const Card = ({ results }) => {
  return (
    <div className="grid grid-cols-[repeat(5,minmax(auto,1fr))] grid-rows-[repeat(1,minmax(auto,400px))] gap-10">
      {sliceArray(results, 0, 5).map((res, i) => (
        <div key={i}>
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
