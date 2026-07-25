import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { motion, useMotionValue, animate } from "framer-motion";
import { useNavigate } from "react-router-dom";

const CARD_WIDTH = 520;

const UpcomingMovies = () => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const controls = useRef(null);
  const x = useMotionValue(0);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await axios.get("http://localhost:8000/movies/upcoming");
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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    window.addEventListener("resize", handleResize);

    return () =>
      window.removeEventListener("resize", handleResize);
  }, []);

  const duplicatedMovies = [...movies, ...movies];

  useEffect(() => {
    if (isMobile || movies.length === 0) {
      controls.current?.stop();
      return;
    }
    const distance = movies.length * CARD_WIDTH;
    x.set(0);
    controls.current = animate( x, -distance, {ease: "linear", duration: distance / 35, repeat: Infinity, repeatType: "loop"});
    return () => controls.current?.stop();
  }, [movies, isMobile, x]);

  const pauseAnimation = () => {
    controls.current?.pause?.();
  };

  const resumeAnimation = () => {
    controls.current?.play?.();
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
        <div className="flex justify-between items-center px-6 mb-10">
          <div>
            <p className="uppercase tracking-[6px] text-red-500">Coming Soon</p>
            <h2 className="hero-title text-5xl">Upcoming Movies</h2>
          </div>
        </div>
        {isMobile ? (
          <div
            className="flex gap-6 overflow-x-auto hide-scrollbar px-6 pb-2">
            {movies.map((movie) => (
              <div
                key={movie.id}
                onClick={() => navigate(`/movie/${movie.id}`)}
                className="relative w-[500px] h-[280px] rounded-3xl overflow-hidden flex-shrink-0 group cursor-pointer">
                <img src={movie.backdrop_url} alt={movie.title} className="w-full h-full object-cover transition duration-700 group-hover:scale-110"/>
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
                <div className="absolute bottom-7 left-7 max-w-[75%]">
                  <span className="bg-red-600 px-3 py-1 rounded-full text-xs">Coming Soon</span>
                  <h3 className="text-3xl font-bold mt-4">{movie.title}</h3>
                  <p className="text-gray-300 mt-2">Release • {movie.release_date}</p>
                  <p className="text-yellow-400 mt-1">⭐ {movie.rating}</p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/movie/${movie.id}`);
                      }} className="mt-5 bg-white text-black px-5 py-2 rounded-lg hover:bg-red-600 hover:text-white transition">Details</button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="overflow-hidden" onMouseEnter={pauseAnimation} onMouseLeave={resumeAnimation}>
            <motion.div style={{ x }} className="flex gap-6 w-max px-6">
              {duplicatedMovies.map((movie, index) => (
                <div
                  key={`${movie.id}-${index}`}
                  onClick={() => navigate(`/movie/${movie.id}`)}
                  className="relative w-[500px] h-[280px] rounded-3xl overflow-hidden flex-shrink-0 group cursor-pointer">
                  <img src={movie.backdrop_url} alt={movie.title} className="w-full h-full object-cover transition duration-700 group-hover:scale-110"/>
                  <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
                  <div className="absolute bottom-7 left-7 max-w-[75%]">
                    <span className="bg-red-600 px-3 py-1 rounded-full text-xs">Coming Soon</span>
                    <h3 className="text-3xl font-bold mt-4">{movie.title}</h3>
                    <p className="text-gray-300 mt-2">Release • {movie.release_date}</p>
                    <p className="text-yellow-400 mt-1">⭐ {movie.rating}</p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/movie/${movie.id}`);
                      }}
                      className="mt-5 bg-white text-black px-5 py-2 rounded-lg hover:bg-red-600 hover:text-white transition">Details</button>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default UpcomingMovies;