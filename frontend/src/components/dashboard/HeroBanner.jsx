import { Play, Info, Star, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const HeroBanner = ({ movie }) => {

  const navigate = useNavigate();

  if (!movie) return null;

  return (

    <section className="relative h-[90vh] overflow-hidden">
      <motion.img
        initial={{ scale: 1 }}
        animate={{ scale: 1.08 }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        src={movie.backdrop_url}
        alt={movie.title}
        className="
        absolute
        inset-0
        w-full
        h-full
        object-cover
        "
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-transparent to-transparent" />
      <div className="relative z-10 h-full max-w-7xl mx-auto px-8 flex items-center">
        <motion.div initial={{opacity: 0,x: -80}} animate={{opacity: 1,x: 0}} transition={{duration: .9}} className="max-w-3xl">
          <span className="uppercase tracking-[5px] text-red-500 font-semibold">Featured Today</span>
          <h1 className="text-7xl font-black mt-4 leading-none">{movie.title}</h1>
          <div className="flex flex-wrap gap-3 mt-8">
            <span className="bg-red-600/20 border border-red-500 text-red-400 px-4 py-2 rounded-full flex items-center gap-2">
              <Star size={16} fill="currentColor" />{movie.rating?.toFixed(1)}</span>
            <span className="bg-white/10 px-4 py-2 rounded-full">{movie.release_date?.substring(0,4)}</span>
            {movie.runtime && (<span className="bg-white/10 px-4 py-2 rounded-full flex items-center gap-2"><Clock size={16} />{movie.runtime} min</span>)}</div>
          {movie.genres && (<div className="flex flex-wrap gap-3 mt-5">{movie.genres.map((genre)=>(<span key={genre.id} className="bg-white/10 px-4 py-2 rounded-full">{genre.name}</span>))}
            </div>
          )}
          <p className="mt-8 text-gray-300 text-lg leading-8 max-w-2xl line-clamp-4">{movie.overview}</p>
          <div className="flex gap-5 mt-10">
            <button className="flex items-center gap-3 bg-red-600 hover:bg-red-700 transition px-8 py-4 rounded-full"><Play fill="white" size={20} />Watch Trailer</button>
            <button
              onClick={() => navigate(`/movie/${movie.id}`)}
              className="flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/10 hover:border-red-500 transition px-8 py-4 rounded-full">
              <Info size={20} />More Info</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroBanner;