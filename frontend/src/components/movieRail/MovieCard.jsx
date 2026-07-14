import { Star } from "lucide-react";
import { motion } from "framer-motion";

const MovieCard = ({ movie }) => {
  return (
    <motion.div
      whileHover={{
        y: -12,
        scale: 1.04,
      }}
      transition={{ duration: .35 }}
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
          src={movie.image}
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

        <h3 className="font-bold text-xl mb-2">

          {movie.title}

        </h3>

        <div className="flex justify-between">

          <span className="text-gray-400">

            {movie.year}

          </span>

          <span className="flex items-center gap-1">

            <Star
              size={17}
              fill="#E50914"
              className="text-red-600"
            />

            {movie.rating}

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