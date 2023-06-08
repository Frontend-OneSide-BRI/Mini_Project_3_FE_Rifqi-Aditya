import { useGetUpcomingMoviesQuery } from "@redux/services/movies/moviesApi";
import { sliceArray } from "@utils";
import { Card } from "@components/atoms";

const ComingSoon = ({ data }) => {
  return (
    <section>
      <div className="flex flex-col">
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mt-0 mb-6">
          See what's new and coming soon.
        </h3>
        <Card results={data.results} />
      </div>
    </section>
  );
};

export default ComingSoon;
