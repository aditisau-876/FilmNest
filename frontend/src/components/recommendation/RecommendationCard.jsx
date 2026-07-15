import { Star } from "lucide-react";
import { motion } from "framer-motion";

const RecommendationCard = ({ movie }) => {
  return (

    <motion.div
      whileHover={{
        y:-10,
        scale:1.04
      }}
      className="cursor-pointer"
    >

      <img

        src={movie.poster}

        alt={movie.title}

        className="
          rounded-2xl
          w-full
          h-[320px]
          object-cover
        "

      />

      <h3 className="mt-4 font-bold">

        {movie.title}

      </h3>

      <div className="flex items-center gap-2 mt-2">

        <Star
          size={16}
          fill="gold"
          className="text-yellow-400"
        />

        {movie.rating}

      </div>

    </motion.div>

  );
};

export default RecommendationCard;