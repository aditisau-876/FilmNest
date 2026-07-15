import { Search, Heart, Bell, User } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const DashboardNavbar = () => {
  return (
    <motion.nav
      initial={{ y: -70 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-2xl border-b border-white/10"
    >
      <div className="max-w-[1500px] mx-auto px-8 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="FilmNest"
            className="h-14 hover:scale-105 transition"
          />
        </Link>

        {/* Search */}
        <div className="hidden md:flex items-center bg-white/10 rounded-full px-5 py-3 w-[450px] border border-white/10 focus-within:border-red-500 transition">

          <Search size={20} className="text-gray-400" />

          <input
            type="text"
            placeholder="Search movies..."
            className="bg-transparent outline-none ml-3 w-full placeholder:text-gray-400"
          />

        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6">

          <button className="hover:text-red-500 transition">
            <Heart size={22}/>
          </button>

          <button className="hover:text-red-500 transition">
            <Bell size={22}/>
          </button>

          <button className="w-11 h-11 rounded-full bg-red-600 flex items-center justify-center hover:scale-105 transition">
            <User size={20}/>
          </button>

        </div>

      </div>
    </motion.nav>
  );
};

export default DashboardNavbar;