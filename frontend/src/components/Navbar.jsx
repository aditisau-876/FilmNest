import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {setScrolled(window.scrollY > 30);};

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
        ${scrolled ? "bg-black/45 backdrop-blur-2xl shadow-xl border-b border-red-900/30" : "bg-transparent"}`}>
        <div className="max-w-[1500px] mx-auto px-8 h-24 flex justify-between items-center"> 

        <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }} className="cursor-pointer">
            <img src={logo} alt="FilmNest Logo" className="h-14 md:h-16 object-contain transition-all duration-300 hover:drop-shadow-[0_0_18px_rgba(229,9,20,0.55)]"/>
        </motion.div>

          <div className="hidden md:flex gap-4">
            <button className="px-6 py-3 rounded-full border border-white/20 hover:border-red-500 hover:bg-white/5 transition">Login</button>
            <button className="px-7 py-3 rounded-full bg-red-600 hover:bg-red-700 transition">Sign Up</button>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </motion.nav>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-0 w-full bg-[#111] backdrop-blur-xl z-40 md:hidden">
            <div className="flex flex-col p-6 gap-5">
              <button className="border border-white/20 py-3 rounded-full">Login</button>
              <button className="bg-red-600 py-3 rounded-full">Sign Up</button>
            </div>
          </motion.div>
        )}

      </AnimatePresence>
    </>
  );
};

export default Navbar;