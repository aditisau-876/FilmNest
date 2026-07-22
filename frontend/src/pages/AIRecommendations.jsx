import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import MovieCard from "../components/movieRail/MovieCard";
import AppNavbar from "../components/AppNavbar";
const AIRecommendations = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const movies = location.state?.movies || [];
    const prompt = location.state?.prompt || "";
    if (!location.state) {
  return (
    <>
      <AppNavbar />

      <div className="min-h-screen bg-[#09090B] text-white flex items-center justify-center">
        <div className="text-center">

          <h1 className="text-4xl font-bold">
            No AI Recommendations
          </h1>

          <p className="text-gray-400 mt-5">
            Please go back and ask the AI for recommendations.
          </p>

          <button
            onClick={() => navigate("/dashboard")}
            className="mt-8 bg-red-600 hover:bg-red-700 px-8 py-3 rounded-full"
          >
            Back to Dashboard
          </button>

        </div>
      </div>
    </>
  );
}

  return (
    <div className="min-h-screen bg-[#09090B] text-white">
        <AppNavbar />
      <div className="max-w-7xl mx-auto px-8 py-32">
        <button
  onClick={() => navigate("/dashboard")}
  className="flex items-center gap-2 text-gray-400 hover:text-red-500 transition mb-10"
>
  <ArrowLeft size={18} />
  Try Another Prompt
</button>

        <p className="uppercase tracking-[6px] text-red-500">
  AI Powered
</p>

<h1 className="text-5xl font-black mt-3">
  Your Movie Matches
</h1>

<p className="text-gray-400 mt-5">
  We found <span className="text-white">{movies.length}</span> movies for
</p>

<p className="text-xl text-white italic mt-2">
  "{prompt}"
</p>

        {movies.length === 0 ? (

  <div className="text-center py-24">

    <h2 className="text-3xl font-bold">
      No movies found
    </h2>

    <p className="text-gray-400 mt-4">
      Try describing your request differently.
    </p>

  </div>

) : (

  <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 mt-12">

    {movies.map(movie => (

      <MovieCard
        key={movie.id}
        movie={movie}
      />

    ))}

  </div>

)}

      </div>

    </div>
  );
};

export default AIRecommendations;