import { useGetMovieDetailQuery } from "@redux/services/movies/moviesApi";
import { TMDB_IMG_BASE_URL } from "@constants";
import { convertMinutesToHours } from "@utils";

const Detail = ({ movieId }) => {
  const { data: movieDetail, isLoading: isLoadingMovieDetail } =
    useGetMovieDetailQuery(movieId);

  return (
    <section>
      {!isLoadingMovieDetail && (
        <div className="relative">
          <img
            src={`${TMDB_IMG_BASE_URL}${movieDetail.backdrop_path}`}
            alt="Background Image"
            className="w-screen h-screen object-cover"
          />
          <div className="flex flex-col justify-center items-center absolute inset-0 bg-black bg-opacity-70 gap-10 p-10 lg:flex-row">
            <div className="max-w-[200px] lg:max-w-[300px]">
              <img src={`${TMDB_IMG_BASE_URL}${movieDetail.poster_path}`}></img>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="text-3xl lg:text-6xl">{movieDetail.title}</h1>
              <span className="text-sm md:text-base">
                {`${movieDetail.release_date} · ${convertMinutesToHours(
                  movieDetail.runtime
                )}`}
              </span>
              <div className="flex gap-3">
                {movieDetail.genres.map((genre) => (
                  <div className="bg-stone-700 text-white p-1 rounded-sm text-xs md:text-sm h-fit hover:cursor-pointer transition-shadow ease-in hover:shadow-sm hover:shadow-stone-400">
                    <p>{genre.name}</p>
                  </div>
                ))}
              </div>
              <p className="max-w-[600px] text-sm md:text-base">
                {movieDetail.overview}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Detail;
