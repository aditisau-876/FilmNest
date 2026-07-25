import { Play, Heart } from "lucide-react";
import { motion } from "framer-motion";

const MovieHero = ({ movie, trailer, added, handleWatchlist,}) => {
  const openTrailer = () => {
    if (!trailer?.youtube_key) return;

    window.open(`https://www.youtube.com/watch?v=${trailer.youtube_key}`,"_blank");
  };
  if (!movie) return null;

  return (
    <section className="relative h-[80vh] bg-cover bg-center" style={{backgroundImage: `url(${movie.backdrop_url || movie.poster_url})`,}}>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-transparent to-transparent" />
      <div className="relative z-10 h-full max-w-7xl mx-auto px-8 flex items-end pb-20">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="flex flex-col lg:flex-row gap-10 items-end">
          <img src={movie.poster_url} alt={movie.title} className="w-72 rounded-3xl shadow-2xl border border-white/10"/>
          <div className="max-w-3xl">
            <span className="text-red-500 uppercase tracking-[6px] text-sm font-semibold">Movie Details</span>
            <h1 className="text-5xl lg:text-6xl font-black mt-3">{movie.title}</h1>
            {movie.tagline && (<p className="italic text-gray-400 text-xl mt-3">{movie.tagline}</p>)}
            <div className="flex flex-wrap gap-3 mt-6">
              <span className="bg-red-600/20 border border-red-600 text-red-400 px-4 py-2 rounded-full">⭐ {movie.rating?.toFixed(1)}</span>
              <span className="bg-white/10 px-4 py-2 rounded-full">{movie.release_date?.substring(0, 4)}</span>
              {movie.runtime && (
                <span className="bg-white/10 px-4 py-2 rounded-full">{movie.runtime} min</span>)}
              {movie.genres?.length > 0 && (<span className="bg-white/10 px-4 py-2 rounded-full">{movie.genres.map((g) => g.name).join(" • ")}</span>)}
            </div>
            <p className="max-w-2xl mt-8 text-gray-300 leading-8 text-lg">{movie.overview}</p>
            <div className="flex flex-wrap gap-5 mt-10">
              <button
                onClick={openTrailer}
                className="bg-red-600 hover:bg-red-700 transition px-8 py-4 rounded-full flex items-center gap-3 font-semibold">
                <Play fill="white" size={20} />Watch Trailer</button>
              <button onClick={handleWatchlist}
                className="bg-white/10 hover:bg-white/20 transition px-8 py-4 rounded-full flex items-center gap-3 border border-white/10 hover:border-red-500 font-semibold">
                <Heart size={20} fill={added ? "red" : "none"} className="text-red-500"/>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MovieHero;