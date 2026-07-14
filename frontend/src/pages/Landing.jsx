import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import FeaturedMovie from "../components/FeaturedMovie";
import MovieRail from "../components/movieRail/MovieRail";
import GenreSection from "../components/GenreSection";
import Footer from "../components/Footer";

import {
  trendingMovies,
  newReleases,
  topRatedMovies,
} from "../data/movies";

const Landing = () => {
  return (
    <div className="bg-[#09090B] text-white overflow-hidden">

      <Navbar />

      <Hero />

      <Features />

      <FeaturedMovie />

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

      <GenreSection />

      <Footer />

    </div>
  );
};

export default Landing;