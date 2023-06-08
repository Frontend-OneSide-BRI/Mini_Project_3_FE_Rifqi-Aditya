import { useGetPopularMoviesQuery } from "@redux/services/movies/moviesApi";
import { sliceArray } from "@utils";
import { TMDB_IMG_BASE_URL } from "@constants";
import { Card } from "@components/atoms";

const Categories = ({ data }) => {
  return (
    <section>
      <div className="flex flex-col items-center test">
        <div>
          <div className="mt-20 sm:mt-28 mb-5">
            <h3 className="mb-2 text-base sm:text-2xl font-bold tracking-widest">
              THE ONE TO WATCH
            </h3>
            <h2 className="text-2xl sm:text-6xl font-extralight">
              For the Biggest Hits
            </h2>
          </div>
          <Card results={data.results} />
        </div>
      </div>
    </section>
  );
};

export default Categories;
