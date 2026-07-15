import { Link } from "react-router-dom";

const SignupForm = () => {
  return (
    <form className="space-y-5">

      <input
        type="text"
        placeholder="Full Name"
        className="w-full bg-white/10 border border-white/10 rounded-xl p-3 outline-none focus:border-red-600"
      />

      <input
        type="email"
        placeholder="Email"
        className="w-full bg-white/10 border border-white/10 rounded-xl p-3 outline-none focus:border-red-600"
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full bg-white/10 border border-white/10 rounded-xl p-3 outline-none focus:border-red-600"
      />

      <button
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