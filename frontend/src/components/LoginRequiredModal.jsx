import { motion } from "framer-motion";
import { X, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LoginRequiredModal = ({ open, onClose }) => {
    const navigate = useNavigate();
    if (!open) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
            <motion.div
                initial={{opacity: 0,scale: 0.9,}}
                animate={{opacity: 1,scale: 1,}}
                exit={{opacity: 0,scale: 0.9,}}
                className="w-[430px] rounded-3xl bg-[#141414] border border-white/10 p-8 relative">
                <button onClick={onClose} className="absolute top-5 right-5 text-gray-400 hover:text-white"><X /></button>
                <div className="flex justify-center mb-6"><div className="bg-red-600/20 p-4 rounded-full"><Heart size={36} className="text-red-500" fill="red"/></div></div>
                <h2 className="text-3xl font-bold text-center">Save Your Movies</h2>
                <p className="text-gray-400 text-center mt-4">
                    Login or create an account to build your personal
                    watchlist, receive AI recommendations and much more.
                </p>
                <div className="flex gap-4 mt-8">
                    <button onClick={() => navigate("/login")} className="flex-1 bg-red-600 hover:bg-red-700 py-3 rounded-full">Login</button>
                    <button onClick={() => navigate("/signup")} className="flex-1 border border-white/20 hover:border-red-600 py-3 rounded-full">Sign Up</button>
                </div>
                <button onClick={onClose} className=" w-full mt-4 text-gray-400 hover:text-white ">Maybe Later</button>
            </motion.div>
        </div>
    );
};

export default LoginRequiredModal;