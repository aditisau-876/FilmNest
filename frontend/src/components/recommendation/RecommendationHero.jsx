import { Sparkles, Wand2 } from "lucide-react";
import { motion } from "framer-motion";

const RecommendationHero = ({
    prompt,
    setPrompt,
    onRecommend,
    loading,
}) => {
  
  return (
    <section id="ai-recommendation" className="max-w-7xl mx-auto px-8 pt-12">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .6 }}
        className="
          relative
          overflow-hidden
          rounded-3xl
          border
          border-white/10
          bg-gradient-to-br
          from-[#18181B]
          to-[#0F0F11]
          p-10
        "
      >

        <div className="absolute -top-20 -right-20 w-72 h-72 bg-red-600/20 blur-[120px]" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-red-600/15 blur-[120px]" />

        <div className="relative z-10">

          <div className="flex items-center gap-3 mb-4">

            <Sparkles className="text-red-500" />

            <span className="text-red-400 font-semibold uppercase tracking-widest">
              AI Powered
            </span>

          </div>

          <h2 className="text-5xl font-black leading-tight">

            Movie Recommendation

          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl leading-7">

            Describe your mood, favourite movie, actor or genre.
            Our AI will recommend the perfect movies for you.

          </p>

          <div className="mt-8 flex flex-col md:flex-row gap-4">

            <input
              value={prompt}
              onChange={(e)=>setPrompt(e.target.value)}
              onKeyDown={(e)=>{
                if(e.key==="Enter"){
                onRecommend();
                }
            }}
              placeholder="Example: I want a mind-bending sci-fi thriller..."
              className="
                flex-1
                bg-white/5
                border
                border-white/10
                rounded-2xl
                px-6
                py-5
                outline-none
                focus:border-red-500
              "
            />

            <button
              onClick={onRecommend}
              disabled={loading}
              className="
                bg-red-600
                hover:bg-red-700
                transition
                rounded-2xl
                px-8
                flex
                items-center
                gap-3
              "
            >

              <Wand2 size={20}/>

              {loading ? "Thinking..." : "Recommend"}

            </button>

          </div>

        </div>

      </motion.div>

    </section>
  );
};

export default RecommendationHero;