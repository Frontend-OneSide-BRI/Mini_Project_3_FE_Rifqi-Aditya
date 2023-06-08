import { Navbar } from "@components/molecules";
import { SkeletonLoader } from "@components/atoms";
import {
  useGetNowPlayingMoviesQuery,
  useGetPopularMoviesQuery,
} from "@redux/services/movies/moviesApi";
import { useDispatch, useSelector } from "react-redux";
import { filterArrBySearchQuery } from "@redux/services/movies/moviesApiSlice";
import { useEffect } from "react";
import { MainLayout } from "@components/organism";
import Hero from "./Hero";
import ComingSoon from "./ComingSoon";
import Categories from "./Categories";
import ContentLayout from "./ContentLayout";
import { useGetUpcomingMoviesQuery } from "@redux/services/movies/moviesApi";

const Landing = () => {
  const { data: upcomingMovies, isLoading: isLoadingUpcomingMovies } =
    useGetUpcomingMoviesQuery();
  const { data: PopularMovies, isLoading: isLoadingPopularMovies } =
    useGetPopularMoviesQuery();

  return (
    <MainLayout>
      <Hero />
      <ContentLayout>
        {isLoadingPopularMovies || isLoadingUpcomingMovies ? (
          <SkeletonLoader />
        ) : (
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
