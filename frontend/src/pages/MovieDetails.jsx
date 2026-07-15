import MovieHero from "../components/movie/MovieHero";
import MovieInfo from "../components/movie/MovieInfo";
import StreamingPlatforms from "../components/movie/StreamingPlatforms";
import CastSection from "../components/movie/CastSection";
import SimilarMovies from "../components/movie/SimilarMovies";
import ReviewSection from "../components/movie/ReviewSection";

const MovieDetails = () => {
  return (
    <div className="bg-[#09090B] text-white min-h-screen">

      <MovieHero />

      <MovieInfo />

      <StreamingPlatforms />

      <CastSection />

      <SimilarMovies />

      <ReviewSection />

    </div>
  );
};

export default MovieDetails;