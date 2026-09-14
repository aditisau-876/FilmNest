import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const GoogleButton = ({
    text = "Continue with Google",
}) => {
    const navigate = useNavigate();
    const googleLogin = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            try {
                const response =
                    await axios.post("https://filmnest-backend.onrender.com/auth/google",{access_token:tokenResponse.access_token,});
                localStorage.setItem("token",response.data.access_token);
                navigate("/dashboard");
            } catch (err) {
                console.error(err);
                alert("Google login failed.");
            }
        },
        onError: () => {
            alert("Google Sign-In failed.");
        },
    });

    return (
        <button type="button" onClick={() => googleLogin()} className="w-full flex items-center justify-center gap-3 py-3 rounded-xl bg-[#151515] border border-white/10 hover:border-red-600 hover:bg-[#1f1f1f] hover:shadow-[0_0_30px_rgba(229,9,20,.25)] transition-all duration-300 group">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-6 h-6 group-hover:scale-110 transition"/>
            <span className="text-white font-medium tracking-wide">{text}</span>
        </button>

    );

};

export default GoogleButton;