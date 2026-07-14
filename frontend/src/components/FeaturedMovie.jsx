import { motion } from "framer-motion";
import { Play, Info, Star, Clock, Calendar } from "lucide-react";

const FeaturedMovie = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background */}

      <div
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{
          backgroundImage:
            "url('/featured/oppenheimer-bg.jpeg')",
        }}
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/70" />

      {/* Gradient */}

      <div className="absolute inset-0 bg-gradient-to-r from-[#09090B] via-black/70 to-black/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">

        {/* Poster */}

        <motion.div
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
        >

          <img
            src="/featured/oppenheimer-poster.jpg"
            alt=""
            className="
w-full
max-w-[340px]
h-auto
rounded-3xl
shadow-[0_25px_70px_rgba(0,0,0,.7)]
hover:scale-105
transition
duration-500
mx-auto
"
          />

        </motion.div>

        {/* Details */}

        <motion.div
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
        >

          <p className="uppercase tracking-[8px] text-red-500 mb-5">
            Featured This Week
          </p>

          <h1 className="hero-title text-7xl">
            OPPENHEIMER
          </h1>

          <div className="flex flex-wrap gap-8 mt-8 mb-8">

            <div className="flex items-center gap-2">

              <Star
                className="text-red-500"
                fill="#E50914"
              />

              <span>8.8 IMDb</span>

            </div>

            <div className="flex items-center gap-2">

              <Clock />

              <span>3h 00m</span>

            </div>

            <div className="flex items-center gap-2">

              <Calendar />

              <span>2023</span>

            </div>

          </div>

          <div className="flex gap-3 flex-wrap mb-8">

            <span className="px-4 py-2 rounded-full bg-red-600/20 border border-red-600">
              Drama
            </span>

            <span className="px-4 py-2 rounded-full bg-red-600/20 border border-red-600">
              History
            </span>

            <span className="px-4 py-2 rounded-full bg-red-600/20 border border-red-600">
              Thriller
            </span>

          </div>

          <p className="text-gray-300 text-lg leading-9 max-w-xl">

            During World War II, physicist
            J. Robert Oppenheimer leads the
            Manhattan Project, creating the
            atomic bomb while confronting
            the immense moral consequences
            of his scientific achievement.

          </p>

          <div className="flex gap-5 mt-12 flex-wrap">

            <button
              className="
              flex
              items-center
              gap-3
              bg-red-600
              hover:bg-red-700
              px-8
              py-4
              rounded-full
              transition
              "
            >

              <Play />

              Watch Trailer

            </button>

            <button
              className="
              flex
              items-center
              gap-3
              border
              border-white/20
              px-8
              py-4
              rounded-full
              hover:border-red-500
              hover:bg-white/5
              transition
              "
            >

              <Info />

              More Details

            </button>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default FeaturedMovie;