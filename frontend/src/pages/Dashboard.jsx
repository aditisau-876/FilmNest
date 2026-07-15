import AppNavbar from "../components/AppNavbar";
import HeroBanner from "../components/dashboard/HeroBanner";
import MovieRail from "../components/movieRail/MovieRail";
import RecommendationHero from "../components/recommendation/RecommendationHero";
import RecommendationGrid from "../components/recommendation/RecommendationGrid";
import {
  trendingMovies,
  newReleases,
  topRatedMovies,
} from "../data/movies";

const Dashboard = () => {
  return (
    <div className="bg-[#09090B] text-white min-h-screen">

      <AppNavbar />
      <HeroBanner />
      <RecommendationHero />
      <RecommendationGrid />
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

      <MovieRail
        title="Recommended For You"
        subtitle="Based on your interests"
        movies={trendingMovies}
        direction="right"
      />

    </div>
  );
};

export default Dashboard;