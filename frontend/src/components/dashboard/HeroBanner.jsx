import { Play, Info } from "lucide-react";
import { motion } from "framer-motion";

const HeroBanner = () => {
  return (
    <section
      className="relative h-[90vh] bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://image.tmdb.org/t/p/original/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

      <div className="relative z-10 h-full flex items-center max-w-7xl mx-auto px-8">

        <motion.div
          initial={{ opacity:0,x:-60 }}
          animate={{ opacity:1,x:0 }}
          transition={{ duration:.8 }}
          className="max-w-xl"
        >

          <span className="text-red-500 uppercase tracking-[4px]">
            Featured Today
          </span>

          <h1 className="text-7xl font-black mt-3">
            Oppenheimer
          </h1>

          <p className="mt-8 text-gray-300 leading-8">
            During World War II,
            physicist J. Robert Oppenheimer leads the
            Manhattan Project, forever changing history.
          </p>

          <div className="flex gap-5 mt-10">

            <button className="flex items-center gap-3 bg-red-600 hover:bg-red-700 transition px-8 py-4 rounded-full">

              <Play fill="white" size={20}/>

              Watch Trailer

            </button>

            <button className="flex items-center gap-3 bg-white/10 hover:bg-white/20 transition px-8 py-4 rounded-full">

              <Info size={20}/>

              More Info

            </button>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default HeroBanner;