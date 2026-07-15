import MovieRail from "../movieRail/MovieRail";

import {
  trendingMovies
} from "../../data/movies";

const SimilarMovies = () => {
  return (
    <MovieRail
      title="Similar Movies"
      subtitle="You may also like"
      movies={trendingMovies}
      direction="left"
    />
  );
};

export default SimilarMovies;