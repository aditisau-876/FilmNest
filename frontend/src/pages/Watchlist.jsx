import { useEffect, useState } from "react";
import AppNavbar from "../components/AppNavbar";
import WatchlistHeader from "../components/watchlist/WatchlistHeader";
import WatchlistMovieCard from "../components/watchlist/WatchlistMovieCard";
import EmptyWatchlist from "../components/watchlist/EmptyWatchlist";

import {
  getWatchlist,
  removeFromWatchlist,
} from "../api/watchlist";

const Watchlist = () => {
  const [watchlist, setWatchlist] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWatchlist();
  }, []);

  const fetchWatchlist = async () => {
    try {
      const movies = await getWatchlist();
      setWatchlist(movies);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const removeMovie = async (id) => {
    try {
      await removeFromWatchlist(id);

      setWatchlist((prev) =>
        prev.filter((movie) => movie.id !== id)
      );
    } catch (err) {
      console.log(err);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#09090B] text-white flex items-center justify-center">
        Loading Watchlist...
      </div>
    );
  }

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