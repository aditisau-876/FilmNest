import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import GoogleButton from "./GoogleButton";


const SignupForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleSubmit = async (e) => {
    e.preventDefault();

    try {

        const response = await axios.post(
            "http://localhost:8000/auth/signup",
            {
                username,
                email,
                password,
            }
        );

        localStorage.setItem(
            "token",
            response.data.token.access_token
        );

        navigate("/dashboard");

    } catch (error) {

        alert(
            error.response?.data?.detail || "Signup failed"
        );

    }
};
  return (
    <form onSubmit={handleSubmit}className="space-y-5">

      <input
    type="text"
    placeholder="Full Name"
    value={username}
    onChange={(e) => setUsername(e.target.value)}
    className="w-full bg-white/10 border border-white/10 rounded-xl p-3 outline-none focus:border-red-600"
/>

      <input
    type="email"
    placeholder="Email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    className="w-full bg-white/10 border border-white/10 rounded-xl p-3 outline-none focus:border-red-600"
/>

      <input
    type="password"
    placeholder="Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    className="w-full bg-white/10 border border-white/10 rounded-xl p-3 outline-none focus:border-red-600"
/>
      <div className="flex items-center gap-3">
    <hr className="flex-1 border-white/10" />
    <span className="text-sm text-gray-500">
        OR
    </span>
    <hr className="flex-1 border-white/10" />
</div>

<div className="flex justify-center">
    <GoogleButton />
</div>

      <button
        type="submit"
        className="
        w-full
        py-3
        rounded-xl
        bg-red-600
        hover:bg-red-700
        transition
        "
      >
        Create Account
      </button>

      <p className="text-center text-gray-400">

        Already have an account?{" "}

        <Link
          to="/login"
          className="text-red-500"
        >
          Login
        </Link>

      </p>

    </form>
  );
};

export default SignupForm;