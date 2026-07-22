import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { motion, useAnimationFrame } from "framer-motion";
import { useNavigate } from "react-router-dom";

const CARD_WIDTH = 520;

const UpcomingMovies = () => {
  const navigate = useNavigate();

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const [offset, setOffset] = useState(0);
  const [paused, setPaused] = useState(false);

  const [isTouching, setIsTouching] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  const resumeTimer = useRef(null);

  const speed = 0.35;

  // Fetch movies
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8000/movies/upcoming"
        );

        if (res.data.success) {
          setMovies(res.data.data);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  // Detect mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);

    return () =>
      window.removeEventListener("resize", handleResize);
  }, []);

  const duplicatedMovies = isMobile
    ? movies
    : [...movies, ...movies];

  // Desktop auto-scroll only
  useAnimationFrame(() => {
    if (isMobile) return;

    if (paused || isTouching || movies.length === 0) return;

    setOffset((prev) => {
      let next = prev - speed;

      const limit = movies.length * CARD_WIDTH;

      if (Math.abs(next) >= limit) next = 0;

      return next;
    });
  });

  useEffect(() => {
    return () => clearTimeout(resumeTimer.current);
  }, []);

  const handleTouchStart = () => {
    if (!isMobile) {
      setIsTouching(true);
      clearTimeout(resumeTimer.current);
    }
  };

  const handleTouchEnd = () => {
    if (!isMobile) {
      resumeTimer.current = setTimeout(() => {
        setIsTouching(false);
      }, 1800);
    }
  };

  if (loading) {
    return (
      <section className="py-20">
        <div className="max-w-[1600px] mx-auto px-6 text-gray-400">
          Loading upcoming movies...
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-[1600px] mx-auto">

        {/* Heading */}
        <div className="flex justify-between items-center px-6 mb-10">
          <div>
            <p className="uppercase tracking-[6px] text-red-500">
              Coming Soon
            </p>

            <h2 className="hero-title text-5xl">
              Upcoming Movies
            </h2>
          </div>
        </div>

        {/* Rail */}
        <div
          onMouseEnter={() => !isMobile && setPaused(true)}
          onMouseLeave={() => !isMobile && setPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className={`
            overflow-x-auto
            hide-scrollbar
            ${isMobile ? "" : "cursor-grab active:cursor-grabbing"}
          `}
        >
          <motion.div
            drag={isMobile ? false : "x"}
            dragConstraints={{
              left: -99999,
              right: 99999,
            }}
            whileTap={
              isMobile
                ? {}
                : {
                    cursor: "grabbing",
                  }
            }
            style={{
              x: isMobile ? 0 : offset,
            }}
            className="flex gap-6 w-max px-6"
          >
            {duplicatedMovies.map((movie, index) => (
              <div
                key={`${movie.id}-${index}`}
                onClick={() => navigate(`/movie/${movie.id}`)}
                className="
                  relative
                  w-[500px]
                  h-[280px]
                  rounded-3xl
                  overflow-hidden
                  flex-shrink-0
                  group
                  cursor-pointer
                "
              >
                <img
                  src={movie.backdrop_url}
                  alt={movie.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    transition
                    duration-700
                    group-hover:scale-110
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

                <div className="absolute bottom-7 left-7 max-w-[75%]">

                  <span className="bg-red-600 px-3 py-1 rounded-full text-xs">
                    Coming Soon
                  </span>

                  <h3 className="text-3xl font-bold mt-4">
                    {movie.title}
                  </h3>

                  <p className="text-gray-300 mt-2">
                    Release • {movie.release_date}
                  </p>

                  <p className="text-yellow-400 mt-1">
                    ⭐ {movie.rating}
                  </p>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/movie/${movie.id}`);
                    }}
                    className="
                      mt-5
                      bg-white
                      text-black
                      px-5
                      py-2
                      rounded-lg
                      hover:bg-red-600
                      hover:text-white
                      transition
                    "
                  >
                    Details
                  </button>

                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default UpcomingMovies;