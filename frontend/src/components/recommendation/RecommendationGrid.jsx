import RecommendationCard from "./RecommendationCard";

const RecommendationGrid = ({
  movies,
  loading,
}) => {

  if (loading) {
    return (
      <section className="max-w-7xl mx-auto px-8 py-12">

        <h2 className="text-3xl font-bold mb-8">
          AI Recommendations
        </h2>

        <p className="text-gray-400">
          🤖 Finding the perfect movies for you...
        </p>

      </section>
    );
  }

  if (!movies.length) {
    return (
      <section className="max-w-7xl mx-auto px-8 py-12">

        <div>

          <p className="uppercase tracking-[6px] text-red-500">
            AI Powered
          </p>

          <h2 className="text-4xl font-bold">
            Movie Recommendations
          </h2>

          <p className="text-gray-400 mt-3">
            Enter a prompt above and let FilmNest AI recommend movies
            based on your mood, favourite actors, genres or keywords.
          </p>

        </div>

      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-8 py-12">

      <div className="flex justify-between items-center mb-8">

        <div>

          <p className="uppercase tracking-[6px] text-red-500">
            AI Powered
          </p>

          <h2 className="text-4xl font-bold">
            Recommended For You
          </h2>

        </div>

      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">

        {movies.map((movie) => (
          <RecommendationCard
            key={movie.id}
            movie={movie}
          />
        ))}

      </div>

    </section>
  );
};

export default RecommendationGrid;