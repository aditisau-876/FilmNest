import DashboardNavbar from "../components/dashboard/DashboardNavbar";
import HeroBanner from "../components/dashboard/HeroBanner";
import MovieRail from "../components/movieRail/MovieRail";

import {
  trendingMovies,
  newReleases,
  topRatedMovies,
} from "../data/movies";

const Dashboard = () => {
  return (
    <div className="bg-[#09090B] text-white min-h-screen">

      <DashboardNavbar />

      <HeroBanner />

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