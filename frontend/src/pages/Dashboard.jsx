import { useEffect, useState } from "react";
import AppNavbar from "../components/AppNavbar";
import HeroBanner from "../components/dashboard/HeroBanner";
import MovieRail from "../components/movieRail/MovieRail";
import RecommendationHero from "../components/recommendation/RecommendationHero";
import RecommendationGrid from "../components/recommendation/RecommendationGrid";
import UpcomingMovies from "../components/dashboard/UpcomingMovies";
import {getTrendingMovies,getTopRatedMovies,getNewReleases,getPopularMovies} from "../api/movies";
import { getWatchlist } from "../api/watchlist";
import { getAIRecommendations } from "../api/ai";

const Dashboard = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [newReleases, setNewReleases] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  const [featuredMovie, setFeaturedMovie] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const [loadingRecommendations, setLoadingRecommendations] = useState(false);
  const [prompt, setPrompt] = useState("");
  
  const refreshWatchlist = async () => {
    try {
      const data = await getWatchlist();
      setWatchlist(data);
    } catch (err) {
      setWatchlist([]);
    }
  };

  const handleRecommend = async () => {

    if (!prompt.trim()) return;

    try {

      setLoadingRecommendations(true);

      const response = await getAIRecommendations(prompt);
      setRecommendations(response.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingRecommendations(false);
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
      <RecommendationHero
        prompt={prompt}
        setPrompt={setPrompt}
        onRecommend={handleRecommend}
        loading={loadingRecommendations}
      />
      <RecommendationGrid
        movies={recommendations}
        loading={loadingRecommendations}
        watchlist={watchlist}
        refreshWatchlist={refreshWatchlist}
      />
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