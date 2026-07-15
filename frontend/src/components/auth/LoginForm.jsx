import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

const handleSubmit = (e) => {
  e.preventDefault();

  // Later we'll call the FastAPI login API here

  navigate("/dashboard");
};
  return (
    <form  onSubmit={handleSubmit} className="space-y-5">

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
        Login
      </button>

      <p className="text-center text-gray-400">

        Don't have an account?{" "}

        <Link
          to="/signup"
          className="text-red-500"
        >
          Sign Up
        </Link>

      </p>

    </form>
  );
};

export default LoginForm;