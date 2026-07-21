import { Star } from "lucide-react";
import { motion } from "framer-motion";

const RecommendationCard = ({ movie }) => {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.04,
      }}
      onClick={() => navigate(`/movie/${movie.id}`)}
      transition={{ duration: 0.3 }}
      className="cursor-pointer group"
    >
      <div className="overflow-hidden rounded-2xl">
        <img
          src={movie.poster_url}
          alt={movie.title}
          className="
            w-full
            h-[320px]
            object-cover
            transition
            duration-500
            group-hover:scale-110
          "
        />
      </div>

      <h3 className="mt-4 font-bold text-lg line-clamp-1">
        {movie.title}
      </h3>

      <div className="flex justify-between items-center mt-2">
        <span className="text-gray-400 text-sm">
          {movie.release_date?.split("-")[0]}
        </span>

        <span className="flex items-center gap-1">
          <Star
            size={16}
            fill="gold"
            className="text-yellow-400"
          />
          {movie.rating.toFixed(1)}
        </span>
      </div>
    </motion.div>
  );
};

export default RecommendationCard;

