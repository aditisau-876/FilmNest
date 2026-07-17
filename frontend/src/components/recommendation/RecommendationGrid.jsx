import { useEffect, useState } from "react";
import RecommendationCard from "./RecommendationCard";

import {
  getTrendingMovies,
  getRecommendations,
} from "../../api/movies";

const RecommendationGrid = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        // First get trending movies
        const trending = await getTrendingMovies();

        if (!trending.length) return;

        // Take the first trending movie
        const firstMovie = trending[0];

        // Fetch recommendations for that movie
        const recommendations = await getRecommendations(firstMovie.id);

        setMovies(recommendations.slice(0, 5));
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendations();
  }, []);

  if (loading) {
    return (
      <section className="max-w-7xl mx-auto px-8 py-12">
        <h2 className="text-3xl font-bold mb-8">
          Because You Watched
        </h2>

        <p className="text-gray-400">
          Loading recommendations...
        </p>
      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-8 py-12">

      <div className="flex justify-between items-center mb-8">

        <div>

          <p className="uppercase tracking-[6px] text-red-500">
            Personalized
          </p>

          <h2 className="text-4xl font-bold">
            Because You Watched
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