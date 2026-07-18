import { Star, Trash2, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WatchlistMovieCard = ({ movie, removeMovie }) => {

  const navigate = useNavigate();

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
        src={movie.poster_url}
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
            {movie.rating.toFixed(1)}
          </span>

          <span>
            {movie.release_date?.substring(0, 4)}
          </span>

        </div>

        <p className="mt-6 text-gray-400 leading-7 line-clamp-4">
          {movie.overview}
        </p>

        <div className="flex flex-wrap gap-5 mt-8">

          <button
            onClick={() => navigate(`/movie/${movie.id}`)}
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
            <Play size={18} fill="white" />
            View Movie
          </button>

          <button
            onClick={() => navigate(`/movie/${movie.id}`)}
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