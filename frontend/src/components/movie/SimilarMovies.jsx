import MovieRail from "../movieRail/MovieRail";

const SimilarMovies = ({ movies }) => {

  if (!movies?.length) return null;

  return (

    <MovieRail
      title="More Like This"
      subtitle="Recommended"
      movies={movies}
      direction="left"
    />

  );

};

export default SimilarMovies;