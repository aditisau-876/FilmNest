import { useEffect, useState } from "react";
import AppNavbar from "../components/AppNavbar";
import HeroBanner from "../components/dashboard/HeroBanner";
import MovieRail from "../components/movieRail/MovieRail";
import RecommendationHero from "../components/recommendation/RecommendationHero";
import RecommendationGrid from "../components/recommendation/RecommendationGrid";
import UpcomingMovies from "../components/dashboard/UpcomingMovies";
import {getTrendingMovies, getTopRatedMovies, getNewReleases} from "../api/movies";

const Dashboard = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [newReleases, setNewReleases] = useState([]);

  useEffect(() => {
  const fetchMovies = async () => {
    try {
      const [
        trending,
        topRated,
        releases
      ] = await Promise.all([
        getTrendingMovies(),
        getTopRatedMovies(),
        getNewReleases(),
      ]);

      setTrendingMovies(trending);
      setTopRatedMovies(topRated);
      setNewReleases(releases);
    } catch (err) {
      console.error(err);
    }
  };

  fetchMovies();
}, []);

  return (
    <div className="bg-[#09090B] text-white min-h-screen">

      <AppNavbar />
      <HeroBanner />
      <RecommendationHero />
      <RecommendationGrid />
      <UpcomingMovies />
      <MovieRail
        title="Trending Now"
        subtitle="Trending"
        movies={trendingMovies}
        direction="left"
      />
      <MovieRail
        title="New Releases"
        subtitle="Latest"
        movies={newReleases}
        direction="right"
      />
      <MovieRail
        title="Top Rated"
        subtitle="IMDb Favorites"
        movies={topRatedMovies}
        direction="left"
      />
    </div>
  );
};
export default Dashboard;