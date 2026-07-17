import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  return (
    <motion.div
      whileHover={{
        y: -12,
        scale: 1.04,
      }}
      onClick={() => navigate(`/movie/${movie.id}`)}
      transition={{ duration: 0.35 }}
      className="
      min-w-[230px]
      bg-[#141414]
      rounded-3xl
      overflow-hidden
      border
      border-white/10
      hover:border-red-600
      group
      cursor-pointer
      "
    >
      <div className="relative overflow-hidden">
        <img
          src={movie.poster_url}
          alt={movie.title}
          className="
          h-[340px]
          w-full
          object-cover
          transition
          duration-500
          group-hover:scale-110
          "
        />

        <div
          className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black
          via-black/30
          to-transparent
          "
        />
      </div>

      <div className="p-5">
        <h3 className="font-bold text-xl mb-2 line-clamp-1">
          {movie.title}
        </h3>

        <div className="flex justify-between items-center">
          <span className="text-gray-400">
            {movie.release_date?.split("-")[0]}
          </span>

          <span className="flex items-center gap-1">
            <Star
              size={17}
              fill="#E50914"
              className="text-red-600"
            />

            {movie.rating?.toFixed(1)}
          </span>
        </div>

        <button
          className="
          mt-5
          w-full
          bg-red-600
          hover:bg-red-700
          rounded-full
          py-3
          transition
          "
        >
          View Details
        </button>
      </div>
    </motion.div>
  );
};

export default MovieCard;