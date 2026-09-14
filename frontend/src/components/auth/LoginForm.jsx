import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import GoogleButton from "./GoogleButton";

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post("https://filmnest-backend.onrender.com/auth/login",{email, password});
        localStorage.setItem("token", response.data.access_token);
        navigate("/dashboard");
    } catch (error) {
        alert(error.response?.data?.detail || "Login failed");
    }

};
  return (
    <form  onSubmit={handleSubmit} className="space-y-5">
      <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} className="w-full bg-white/10 border border-white/10 rounded-xl p-3 outline-none focus:border-red-600"/>
      <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} className="w-full bg-white/10 border border-white/10 rounded-xl p-3 outline-none focus:border-red-600"/>
      <div className="flex items-center gap-3">
        <hr className="flex-1 border-white/10" />
        <span className="text-sm text-gray-500">OR</span>
        <hr className="flex-1 border-white/10" />
      </div>

    <GoogleButton text="Sign in with Google"/>
      <button type="submit" className=" w-full py-3 rounded-xl bg-red-600 hover:bg-red-700 transition">Login</button>
      <p className="text-center text-gray-400">Don't have an account?{" "}<Link to="/signup" className="text-red-500">Sign Up</Link></p>
    </form>
  );
};

export default LoginForm;