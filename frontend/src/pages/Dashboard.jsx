import { useEffect, useState } from "react";
import AppNavbar from "../components/AppNavbar";
import HeroBanner from "../components/dashboard/HeroBanner";
import MovieRail from "../components/movieRail/MovieRail";
import RecommendationHero from "../components/recommendation/RecommendationHero";
import RecommendationGrid from "../components/recommendation/RecommendationGrid";
import UpcomingMovies from "../components/dashboard/UpcomingMovies";
import {getTrendingMovies,getTopRatedMovies,getNewReleases,getPopularMovies} from "../api/movies";
import { getWatchlist } from "../api/watchlist";

const Dashboard = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [newReleases, setNewReleases] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  const [featuredMovie, setFeaturedMovie] = useState(null);
  
  const refreshWatchlist = async () => {
    try {
      const data = await getWatchlist();
      setWatchlist(data);
    } catch (err) {
      setWatchlist([]);
    }
  };
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const [trending,topRated,releases,popular] = await Promise.all([getTrendingMovies(),getTopRatedMovies(),getNewReleases(),getPopularMovies()]);
        setTrendingMovies(trending);
        setTopRatedMovies(topRated);
        setNewReleases(releases);
        if (popular.length > 0) {
          const randomMovie =popular[Math.floor(Math.random() * popular.length)];
          setFeaturedMovie(randomMovie);
          }
        await refreshWatchlist();
      } catch (err) {
        console.error(err);
      }
    };
    fetchMovies();
  }, []);

  useEffect(() => {
    console.log("Dashboard watchlist:", watchlist);
  }, [watchlist]);

  return (
    <div className="bg-[#09090B] text-white min-h-screen">
      <AppNavbar />
      <HeroBanner movie={featuredMovie}/>
      <RecommendationHero />
      <RecommendationGrid />
      <UpcomingMovies />
      <MovieRail
        title="Trending Now"
        subtitle="Trending"
        movies={trendingMovies}
        direction="left"
        watchlist={watchlist}
        refreshWatchlist={refreshWatchlist}
      />
      <MovieRail
        title="New Releases"
        subtitle="Latest"
        movies={newReleases}
        direction="right"
        watchlist={watchlist}
        refreshWatchlist={refreshWatchlist}
      />
      <MovieRail
        title="Top Rated"
        subtitle="IMDb Favorites"
        movies={topRatedMovies}
        direction="left"
        watchlist={watchlist}
        refreshWatchlist={refreshWatchlist}
      />
    </div>
  );
};

export default Dashboard;