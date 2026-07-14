import { useEffect, useRef, useState } from "react";
import { motion, useAnimationFrame } from "framer-motion";
import MovieCard from "./MovieCard";

const CARD_WIDTH = 256; // Card width + gap (adjust later if needed)

const MovieRail = ({
  title,
  subtitle = "Movies",
  movies,
  direction = "left",
}) => {
  const duplicatedMovies = [...movies, ...movies];

  const containerRef = useRef(null);

  const [offset, setOffset] = useState(0);

  const [paused, setPaused] = useState(false);

  const [isTouching, setIsTouching] = useState(false);

  const resumeTimer = useRef(null);

  const speed = 0.45;

  useAnimationFrame(() => {
    if (paused || isTouching) return;

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

  const handleTouchStart = () => {
    setIsTouching(true);

    clearTimeout(resumeTimer.current);
  };

  const handleTouchEnd = () => {
    resumeTimer.current = setTimeout(() => {
      setIsTouching(false);
    }, 1800);
  };

  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-[1600px] mx-auto">

        {/* Heading */}

        <div className="flex justify-between items-center px-6 mb-10">

          <div>

            <p className="uppercase tracking-[6px] text-red-500">

              {subtitle}

            </p>

            <h2 className="hero-title text-5xl">

              {title}

            </h2>

          </div>

          <button
            className="
            border
            border-white/20
            px-6
            py-3
            rounded-full
            hover:border-red-600
            hover:bg-red-600/10
            transition
            "
          >
            View All
          </button>

        </div>

        {/* Rail */}

        <div
          ref={containerRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="
overflow-x-auto
hide-scrollbar
cursor-grab
active:cursor-grabbing
"
        >

          <motion.div
            drag="x"
            dragConstraints={{ left: -99999, right: 99999 }}
            whileTap={{ cursor: "grabbing" }}
            style={{
              x: offset,
            }}
            className="flex gap-6 w-max px-6"
          >

            {duplicatedMovies.map((movie, index) => (
              <MovieCard
                key={index}
                movie={movie}
              />
            ))}

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default MovieRail;