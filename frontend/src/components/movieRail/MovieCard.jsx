import { Star, Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { getWatchlist,addToWatchlist,removeFromWatchlist} from "../../api/watchlist";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import LoginRequiredModal from "../../components/LoginRequiredModal";
const MovieCard = ({ movie, watchlist,refreshWatchlist }) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const navigate = useNavigate();
  const [added, setAdded] = useState(false);
  useEffect(() => {
    setAdded(
    (watchlist || []).some(item => item.id === movie.id));
  }, [watchlist, movie.id]);

const handleWatchlist = async () => {
  console.log("❤️ Heart clicked");
  const token = localStorage.getItem("token");
  console.log("Token:", token);
  if (!token) {
    console.log("Opening modal...");
    setShowLoginModal(true);
    return;
  }
  try {
    if (added) {
      await removeFromWatchlist(movie.id);
      setAdded(false);
    } else {
      await addToWatchlist(movie.id);
      setAdded(true);}
    refreshWatchlist?.();
  } catch (error) {
    console.log(error.response?.data);
  }
};

  return (
    <motion.div
      whileHover={{
        y: -12,
        scale: 1.04,
      }}
      onClick={() => navigate(`/movie/${movie.id}`)}
      transition={{ duration: 0.35 }}
      className="min-w-[230px] bg-[#141414] rounded-3xl overflow-hidden border border-white/10 hover:border-red-600 group cursor-pointer">
      <div className="relative overflow-hidden">
        <img src={movie.poster_url} alt={movie.title} className="h-[340px] w-full object-cover transition duration-500 group-hover:scale-110"/>
        <div
          className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"/></div>
      <div className="p-5">
        <h3 className="font-bold text-xl mb-2 line-clamp-1">
          {movie.title}
        </h3>

        <div className="flex justify-between items-center">
          <span className="text-gray-400">
            {movie.release_date?.split("-")[0]}
          </span>

          <span className="flex items-center gap-1"><Star size={17} fill="#E50914" className="text-red-600"/>{movie.rating?.toFixed(1)}</span>
        </div>
        <div className="flex gap-3 mt-5">
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/movie/${movie.id}`);
            }}
            className="flex-1 bg-red-600 hover:bg-red-700 rounded-full py-3 transition">View Details</button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleWatchlist();
            }}
            className="px-4 bg-white/10 hover:bg-red-600 rounded-full transition">
            <Heart size={22} fill={added ? "red" : "none"} className="text-red-500"/>
          </button>

</div>
      </div>
      <LoginRequiredModal open={showLoginModal} onClose={() => setShowLoginModal(false)}/>
    </motion.div>
  );
};

export default MovieCard;