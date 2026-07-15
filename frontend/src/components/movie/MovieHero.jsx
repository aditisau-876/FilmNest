import { Play, Heart } from "lucide-react";
import { motion } from "framer-motion";

const MovieHero = () => {
  return (
    <section
      className="relative h-[75vh] bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://image.tmdb.org/t/p/original/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-8 flex items-end pb-20">

        <motion.div
          initial={{ opacity:0,y:40 }}
          animate={{ opacity:1,y:0 }}
          transition={{ duration:.8 }}
          className="flex gap-10 items-end"
        >

          <img
            src="https://image.tmdb.org/t/p/w500/ptpr0kGAckfQkJeJIt8st5dglvd.jpg"
            alt="poster"
            className="w-72 rounded-3xl shadow-2xl"
          />

          <div>

            <span className="text-red-500 uppercase tracking-[4px]">
              Featured Movie
            </span>

            <h1 className="text-6xl font-black mt-3">
              Oppenheimer
            </h1>

            <div className="flex gap-6 mt-5 text-gray-300">

              <span>⭐ 8.7</span>

              <span>2023</span>

              <span>180 min</span>

              <span>Biography</span>

            </div>

            <p className="max-w-2xl mt-8 text-gray-300 leading-8">

              The story of J. Robert Oppenheimer,
              the physicist behind the Manhattan Project,
              and the consequences of changing history forever.

            </p>

            <div className="flex gap-5 mt-10">

              <button className="bg-red-600 hover:bg-red-700 transition px-8 py-4 rounded-full flex items-center gap-3">

                <Play fill="white"/>

                Watch Trailer

              </button>

              <button className="bg-white/10 hover:bg-white/20 transition px-8 py-4 rounded-full flex items-center gap-3">

                <Heart/>

                Watchlist

              </button>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default MovieHero;