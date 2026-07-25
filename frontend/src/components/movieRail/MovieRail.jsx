import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import MovieCard from "./MovieCard";

const CARD_WIDTH = 256;

const MovieRail = ({
  title,
  subtitle = "Movies",
  movies = [],
  direction = "left",
  watchlist = [],
  refreshWatchlist,
}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const controls = useRef(null);

  const x = useMotionValue(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const duplicatedMovies = [...movies, ...movies];

  useEffect(() => {
    if (isMobile || movies.length === 0) {
      controls.current?.stop();
      return;
    }

    const distance = movies.length * CARD_WIDTH;

    x.set(direction === "left" ? 0 : -distance);

    controls.current = animate(
      x,
      direction === "left" ? -distance : 0,
      {
        ease: "linear",
        duration: distance / 35,
        repeat: Infinity,
        repeatType: "loop",
      }
    );

    return () => controls.current?.stop();
  }, [movies, direction, isMobile, x]);

  const pauseAnimation = () => {
    controls.current?.pause?.();
  };

  const resumeAnimation = () => {
    controls.current?.play?.();
  };

  // ---------------- MOBILE ----------------

  if (isMobile) {
    return (
      <section className="py-12">
        <div className="px-4 mb-6">
          <p className="uppercase tracking-[5px] text-red-500 text-sm">
            {subtitle}
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {title}
          </h2>
        </div>

        <div
          className="
            flex
            gap-4
            overflow-x-auto
            px-4
            pb-3
            hide-scrollbar
            snap-x
            snap-mandatory
          "
        >
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="snap-start shrink-0"
            >
              <MovieCard
                movie={movie}
                watchlist={watchlist}
                refreshWatchlist={refreshWatchlist}
              />
            </div>
          ))}
        </div>
      </section>
    );
  }

  // ---------------- DESKTOP ----------------

  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-[1600px] mx-auto">

        <div className="flex justify-between items-center px-6 mb-10">
          <div>
            <p className="uppercase tracking-[6px] text-red-500">
              {subtitle}
            </p>

            <h2 className="hero-title text-5xl">
              {title}
            </h2>
          </div>
        </div>

        <div
          className="overflow-hidden"
          onMouseEnter={pauseAnimation}
          onMouseLeave={resumeAnimation}
        >
          <motion.div
            style={{ x }}
            className="flex gap-6 w-max px-6"
          >
            {duplicatedMovies.map((movie, index) => (
              <MovieCard
                key={`${movie.id}-${index}`}
                movie={movie}
                watchlist={watchlist}
                refreshWatchlist={refreshWatchlist}
              />
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default MovieRail;