import { useEffect, useRef, useState } from "react";
import { motion, useAnimationFrame } from "framer-motion";
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
  const duplicatedMovies = [...movies, ...movies];

  const [offset, setOffset] = useState(0);
  const [paused, setPaused] = useState(false);

  const resumeTimer = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const speed = 0.35;

  useAnimationFrame(() => {
    if (isMobile) return;
    if (paused) return;
    if (movies.length === 0) return;

    setOffset((prev) => {
      let next =
        direction === "left"
          ? prev - speed
          : prev + speed;

      const limit = movies.length * CARD_WIDTH;

      if (direction === "left" && Math.abs(next) >= limit)
        next = 0;

      if (direction === "right" && next >= 0)
        next = -limit;

      return next;
    });
  });

  useEffect(() => {
    return () => clearTimeout(resumeTimer.current);
  }, []);

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
            <div key={movie.id} className="snap-start shrink-0">
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
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="overflow-hidden"
        >

          <motion.div
            style={{ x: offset }}
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