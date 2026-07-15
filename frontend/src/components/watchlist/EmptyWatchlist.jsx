import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const EmptyWatchlist = () => {
  return (
    <div className="py-28 text-center">

      <Heart
        size={90}
        className="mx-auto text-red-600"
      />

      <h2 className="text-4xl font-bold mt-8">

        Your Watchlist is Empty

      </h2>

      <p className="text-gray-400 mt-4">

        Save your favourite movies and they'll appear here.

      </p>

      <Link
        to="/dashboard"
        className="
        inline-block
        mt-10
        bg-red-600
        hover:bg-red-700
        px-8
        py-4
        rounded-full
        "
      >

        Browse Movies

      </Link>

    </div>
  );
};

export default EmptyWatchlist;