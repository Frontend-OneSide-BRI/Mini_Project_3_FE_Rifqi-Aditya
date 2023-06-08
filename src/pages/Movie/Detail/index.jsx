import { useGetMovieDetailQuery } from "@redux/services/movies/moviesApi";
import { TMDB_IMG_BASE_URL } from "@constants";

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
          <div className="flex justify-center items-center absolute inset-0 bg-black bg-opacity-70 gap-10 p-10">
            <div className="max-w-[300px]">
              <img src={`${TMDB_IMG_BASE_URL}${movieDetail.poster_path}`}></img>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="text-6xl">{movieDetail.title}</h1>
              <span>
                {movieDetail.release_date} · {movieDetail.runtime}
              </span>
              <div className="flex gap-3">
                {movieDetail.genres.map((genre) => (
                  <div className="bg-stone-700 text-white p-1 rounded-sm text-xs hover:cursor-pointer transition-shadow ease-in hover:shadow-sm hover:shadow-stone-400">
                    <p>{genre.name}</p>
                  </div>
                ))}
              </div>
              <p className="max-w-[600px] text-sm">{movieDetail.overview}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Detail;
