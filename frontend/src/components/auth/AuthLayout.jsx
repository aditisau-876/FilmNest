import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Clapperboard } from "lucide-react";

const AuthLayout = ({ title, subtitle, children }) => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-cover bg-center scale-110" style={{backgroundImage:"url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba')",}}/>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/70" />
      <motion.div animate={{x: [0, 60, -40, 0], y: [0, -30, 20, 0]}}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut"}} className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-red-600/20 blur-[180px]"/>
      <motion.div animate={{x: [0, -50, 40, 0], y: [0, 40, -20, 0],}} transition={{duration: 12, repeat: Infinity, ease: "easeInOut"}} className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-red-700/20 blur-[180px]"/>
      <Link to="/" className="absolute top-8 left-8 z-30"><img src={logo} alt="FilmNest" className="h-16 hover:scale-105 transition duration-300"/></Link>
      <div className="relative z-20 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -70 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .8 }} className="hidden lg:block">
            <div className="inline-flex items-center gap-3 bg-red-600/20 px-5 py-2 rounded-full border border-red-500/30 mb-8"><Clapperboard className="text-red-500" /><span className="text-red-400 tracking-wide">CINEMATIC EXPERIENCE</span></div>
            <h1 className="text-6xl font-black leading-tight">Welcome to<span className="block text-red-600 mt-2">FILMNEST</span></h1>
            <p className="mt-8 text-gray-300 text-lg leading-8 max-w-xl">Discover trending movies, official trailers, ratings, reviews, streaming platforms and personalized recommendations — all in one place.</p>
            <div className="mt-12 border-l-4 border-red-600 pl-6"><p className="italic text-gray-400 text-xl">"Every movie has a story.Your next favorite starts here."</p></div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }} className="flex justify-center">
            <div className="w-full max-w-md rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/10 shadow-[0_0_45px_rgba(229,9,20,.25)] p-10">
              <h2 className="text-4xl font-bold">{title}</h2>
              <p className="text-gray-400 mt-3 mb-8">{subtitle}</p>
              {children}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;