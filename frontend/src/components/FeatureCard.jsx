import { motion } from "framer-motion";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="
        rounded-3xl
        border border-white/10
        bg-white/5
        backdrop-blur-md
        p-8
        hover:border-red-600/40
        hover:shadow-[0_0_35px_rgba(229,9,20,0.2)]
        transition-all
        duration-300
      "
    >
      <div className="text-red-600 mb-5">{icon}</div>

      <h3 className="text-2xl font-semibold mb-3">
        {title}
      </h3>

      <p className="text-gray-400 leading-7">
        {description}
      </p>
    </motion.div>
  );
};

export default FeatureCard;