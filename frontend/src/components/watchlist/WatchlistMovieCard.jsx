import { Star, Trash2, Play } from "lucide-react";

const WatchlistMovieCard = ({ movie, removeMovie }) => {
  return (
    <div
      className="
      bg-white/5
      border
      border-white/10
      rounded-3xl
      overflow-hidden
      flex
      flex-col
      md:flex-row
      "
    >

      <img
        src={movie.poster}
        alt={movie.title}
        className="
        w-full
        md:w-56
        h-80
        object-cover
        "
      />

      <div className="flex-1 p-8">

        <h2 className="text-3xl font-bold">

          {movie.title}

        </h2>

        <div className="flex gap-5 mt-4 text-gray-300">

          <span className="flex items-center gap-2">

            <Star
              size={18}
              fill="gold"
              className="text-yellow-400"
            />

            {movie.rating}

          </span>

          <span>{movie.genre}</span>

          <span>{movie.year}</span>

        </div>

        <p className="mt-6 text-gray-400 leading-7">

          A short movie description will appear here once
          the backend is connected with TMDB.

        </p>

        <div className="flex flex-wrap gap-5 mt-8">

          <button
            className="
            flex
            items-center
            gap-3
            bg-red-600
            hover:bg-red-700
            px-6
            py-3
            rounded-full
            "
          >
            <Play size={18} fill="white"/>

            Trailer

          </button>

          <button
            className="
            border
            border-white/20
            px-6
            py-3
            rounded-full
            hover:border-red-600
            "
          >
            More Details
          </button>

          <button
            onClick={() => removeMovie(movie.id)}
            className="
            flex
            items-center
            gap-3
            border
            border-red-600
            text-red-500
            px-6
            py-3
            rounded-full
            hover:bg-red-600
            hover:text-white
            transition
            "
          >

            <Trash2 size={18}/>

            Remove

          </button>

        </div>

      </div>

    </div>
  );
};

export default WatchlistMovieCard;