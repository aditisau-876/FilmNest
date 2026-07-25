import { Sparkles, Wand2, BrainCircuit } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { getAIRecommendations } from "../../api/movies";

const RecommendationHero = () => {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleRecommend = async () => {
    if (!prompt.trim()) return;
    try {
      setLoading(true);
      const result = await getAIRecommendations(prompt);
      navigate("/ai-results", {state: {movies: result.data,prompt,},
      });
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-recommendation" className="max-w-7xl mx-auto px-8 pt-12">
      <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#17171B] via-[#141416] to-[#0E0E10] px-10 py-12">
        <div className="absolute -top-24 -right-20 h-72 w-72 rounded-full bg-red-600/20 blur-[140px]" />
        <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-red-700/15 blur-[140px]" />
        <div className="relative z-10">
          <div className="flex items-center justify-between gap-10">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="text-red-500" size={22} />
                <span className="uppercase tracking-[5px] text-red-400 font-semibold">AI Powered</span>
              </div>
              <h2 className="text-5xl font-black leading-tight">Find Your Perfect Movie</h2>
              <p className="mt-5 text-gray-400 text-lg leading-8 max-w-3xl">Describe your mood, favourite movie, actor, genre or even a random situation. Our AI will understand your taste and suggest the perfect movies for your next watch.</p>
            </div>

            <motion.div
              animate={{rotate: 360}}
              transition={{duration: 18, repeat: Infinity, ease: "linear"}}
              className="hidden lg:flex relative items-center justify-center h-44 w-44">
              <div className="absolute h-40 w-40 rounded-full border border-red-500/20" />
              <div className="absolute h-28 w-28 rounded-full border border-red-500/40" />
              <div className="absolute h-16 w-16 rounded-full bg-red-600/20 blur-xl" />
              <BrainCircuit size={55} className="text-red-500 relative z-10"/>
            </motion.div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleRecommend();
            }} className="mt-10">
            <div className="flex flex-col md:flex-row gap-4 w-full">
              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe what you'd like to watch..."
                className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-7 py-5 text-lg outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/30"/>
              <button type="submit" disabled={loading} className="px-9 rounded-2xl bg-red-600 hover:bg-red-700 transition font-semibold flex items-center justify-center gap-3 min-w-[220px]"><Wand2 size={20} />{loading ? "Finding..." : "Recommend"}</button>
            </div>
          </form>
          <div className="mt-7 flex flex-wrap gap-3"> {["Mind-bending thrillers","Romantic movies with happy ending","Like Interstellar","Comedy for family night","Action with great plot",].map((item) => (<button key={item} onClick={() => setPrompt(item)} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 transition hover:border-red-500 hover:text-white">{item}</button>))}</div>
        </div>
      </div>
    </section>
  );
};

export default RecommendationHero;