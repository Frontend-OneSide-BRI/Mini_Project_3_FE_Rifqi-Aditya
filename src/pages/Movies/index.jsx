import { MainLayout, ContentLayout } from "@components/organism";
import { Header } from "@components/molecules";
import { Card, Pagination } from "@components/atoms";
import { useGetTopRatedMoviesQuery } from "@redux/services/movies/moviesApi";
import { useSelector } from "react-redux";
import { useState } from "react";

const Movies = () => {
  const [currPage, setCurrPage] = useState(1);

  const { data, isLoading } = useGetTopRatedMoviesQuery(currPage);
  const filteredArr = useSelector((state) => state.filteredMovieData);
  const isArrEmpty = filteredArr.filteredMovieData.length === 0;

  return (
    <MainLayout>
      <Header />
      <ContentLayout>
        {isLoading ? (
          <div>Data not Found</div>
        ) : (
          <Card
            renderAll={true}
            results={isArrEmpty ? data.results : filteredArr.filteredMovieData}
          />
        )}
        <Pagination setCurrPage={setCurrPage} />
      </ContentLayout>
    </MainLayout>
  );
};

export default Movies;
