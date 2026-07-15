import { Star } from "lucide-react";
import { motion } from "framer-motion";

const SearchCard = ({ movie }) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.04 }}
      className="cursor-pointer"
    >
      <div className="overflow-hidden rounded-2xl">

        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-[320px] object-cover hover:scale-110 transition duration-500"
        />

      </div>

      <h3 className="mt-4 font-semibold text-lg">
        {movie.title}
      </h3>

      <div className="flex items-center gap-2 mt-2 text-yellow-400">

        <Star
          size={16}
          fill="gold"
        />

        {movie.rating}

      </div>

    </motion.div>
  );
};

export default SearchCard;