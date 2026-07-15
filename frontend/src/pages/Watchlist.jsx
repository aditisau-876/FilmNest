import { useState } from "react";
import WatchlistHeader from "../components/watchlist/WatchlistHeader";
import WatchlistMovieCard from "../components/watchlist/WatchlistMovieCard";
import EmptyWatchlist from "../components/watchlist/EmptyWatchlist";
import { trendingMovies } from "../data/movies";
import AppNavbar from "../components/AppNavbar";
const Watchlist = () => {

  // Temporary data
  const [watchlist, setWatchlist] = useState(trendingMovies);

  const removeMovie = (id) => {
    setWatchlist((prev) => prev.filter((movie) => movie.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#09090B] text-white">
      <AppNavbar />
      <WatchlistHeader count={watchlist.length} />

      <div className="max-w-7xl mx-auto px-8 py-12">

        {watchlist.length === 0 ? (
          <EmptyWatchlist />
        ) : (
          <div className="space-y-8">

            {watchlist.map((movie) => (
              <WatchlistMovieCard
                key={movie.id}
                movie={movie}
                removeMovie={removeMovie}
              />
            ))}

          </div>
        )}

      </div>

    </div>
  );
};

export default Watchlist;