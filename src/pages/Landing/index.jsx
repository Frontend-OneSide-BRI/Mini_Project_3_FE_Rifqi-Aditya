import { useGetPopularMoviesQuery } from "@redux/services/movies/moviesApi";
import { MainLayout, ContentLayout } from "@components/organism";
import Banner from "./Banner";
import ComingSoon from "./ComingSoon";
import Categories from "./Categories";
import { useGetUpcomingMoviesQuery } from "@redux/services/movies/moviesApi";
import { Header } from "@components/molecules";

const Landing = () => {
  const { data: upcomingMovies, isLoading: isLoadingUpcomingMovies } =
    useGetUpcomingMoviesQuery();
  const { data: PopularMovies, isLoading: isLoadingPopularMovies } =
    useGetPopularMoviesQuery();

  return (
    <MainLayout>
      <Header />
      <Banner />
      <ContentLayout>
        {isLoadingPopularMovies || isLoadingUpcomingMovies ? null : (
          <>
            <ComingSoon data={upcomingMovies} />
            <Categories data={PopularMovies} />
          </>
        )}
      </ContentLayout>
    </MainLayout>
  );
};

export default Landing;
