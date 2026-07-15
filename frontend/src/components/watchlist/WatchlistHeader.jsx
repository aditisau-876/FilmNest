import { Heart } from "lucide-react";

const WatchlistHeader = ({ count }) => {
  return (
    <div className="pt-32 pb-8 border-b border-white/10">

      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">

        <div>

          <h1 className="text-5xl font-black flex items-center gap-4">

            <Heart className="text-red-600 fill-red-600"/>

            My Watchlist

          </h1>

          <p className="text-gray-400 mt-3">

            {count} Saved Movies

          </p>

        </div>

        <select
          className="
          bg-white/5
          border
          border-white/10
          rounded-xl
          px-5
          py-3
          "
        >
          <option>Recently Added</option>
          <option>IMDb Rating</option>
          <option>Release Year</option>
          <option>Alphabetical</option>
        </select>

      </div>

    </div>
  );
};

export default WatchlistHeader;