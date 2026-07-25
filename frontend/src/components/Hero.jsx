import { motion } from "framer-motion";
import Glow from "./Glow";
import SearchBar from "./SearchBar";
import ScrollIndicator from "./ScrollIndicator";

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba')] bg-cover bg-center bg-no-repeat brightness-110 contrast-125 saturate-125 scale-105"/>
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/45 to-[#09090B]" />
      <Glow />
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6 pt-20">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-title text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-tight">YOUR NEXT FAVORITE<br />MOVIE STARTS HERE
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 max-w-3xl text-base sm:text-lg text-gray-300 px-6">Discover trending movies, official trailers, ratings, reviews, streaming platforms and build your own watchlist — all in one place.</motion.p>
        <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="mt-10 w-full flex justify-center">
          <SearchBar />
        </motion.div>
      </div>
      <ScrollIndicator />
    </section>
  );
};

export default Hero;