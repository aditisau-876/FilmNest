import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AppNavbar from "../components/AppNavbar";
import MovieHero from "../components/movie/MovieHero";
import MovieInfo from "../components/movie/MovieInfo";
import StreamingPlatforms from "../components/movie/StreamingPlatforms";
import CastSection from "../components/movie/CastSection";
import SimilarMovies from "../components/movie/SimilarMovies";
import ReviewSection from "../components/movie/ReviewSection";
import TrailerSection from "../components/movie/TrailerSection";
import {getMovieDetails,getMovieTrailer,getMovieCast,getWatchProviders,getMovieReviews,getSimilarMovies,} from "../api/movies";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [cast, setCast] = useState([]);
  const [providers, setProviders] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const [
          movieData,
          trailerData,
          castData,
          providerData,
          reviewData,
          similarData,
        ] = await Promise.all([
          getMovieDetails(id),
          getMovieTrailer(id),
          getMovieCast(id),
          getWatchProviders(id),
          getMovieReviews(id),
          getSimilarMovies(id),
        ]);

        setMovie(movieData);
        setTrailer(trailerData);
        setCast(castData);
        setProviders(providerData);
        setReviews(reviewData);
        setSimilarMovies(similarData);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  if (loading)
    return (
      <div className="bg-[#09090B] min-h-screen text-white flex items-center justify-center">
        Loading...
      </div>
    );

  return (
    <div className="bg-[#09090B] text-white min-h-screen">
      <AppNavbar />
      <MovieHero
        movie={movie}
        trailer={trailer}/>
      <TrailerSection trailer={trailer} />
      <MovieInfo movie={movie} />
      <StreamingPlatforms providers={providers} />
      <CastSection cast={cast} />
      <SimilarMovies movies={similarMovies} />
      <ReviewSection reviews={reviews} />

    </div>
  );
};

export default MovieDetails;