import Detail from "./Detail";
import { useParams } from "react-router-dom";
import { MainLayout } from "@components/organism";

const Movie = () => {
  const { movieId } = useParams();
  return (
    <MainLayout>
      <Detail movieId={movieId} />
    </MainLayout>
  );
};

export default Movie;
