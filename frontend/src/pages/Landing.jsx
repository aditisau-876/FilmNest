import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import FeaturedMovie from "../components/FeaturedMovie";
import MovieRail from "../components/movieRail/MovieRail";
import GenreSection from "../components/GenreSection";
import Footer from "../components/Footer";
import {getTrendingMovies, getTopRatedMovies, getNewReleases, getPopularMovies} from "../api/movies";

const Landing = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [newReleases, setNewReleases] = useState([]);
    const [featuredMovies, setFeaturedMovies] = useState([]);
    useEffect(() => {
    const fetchMovies = async () => {
      try {
        const [trending, topRated, releases,popular] = await Promise.all([getTrendingMovies(), getTopRatedMovies(), getNewReleases(), getPopularMovies(),]);
        setTrendingMovies(trending);
        setTopRatedMovies(topRated);
        setNewReleases(releases);
        setFeaturedMovies(popular);
      } catch (err) {
        console.error(err);
      }
    };
  
    fetchMovies();
  }, []);


  return (
    <div className="bg-[#09090B] text-white overflow-hidden">
      <Navbar />
      <Hero />
      <Features />
      <FeaturedMovie movie={featuredMovies[0]} />
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