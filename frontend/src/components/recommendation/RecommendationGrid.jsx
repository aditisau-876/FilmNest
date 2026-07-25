import { useEffect, useState } from "react";
import RecommendationCard from "./RecommendationCard";
import {getTrendingMovies,getRecommendations,getRecommendationBase} from "../../api/movies";

const RecommendationGrid = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchRecommendations = async () => {

      try {

        let movieId = null;

        const base = await getRecommendationBase();

        if (base.movie_id) {

          movieId = base.movie_id;

        } else {

          const trending = await getTrendingMovies();

          if (!trending.length) {
            setLoading(false);
            return;
          }

          movieId = trending[0].id;
        }

        const recommendations =
          await getRecommendations(movieId);

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
        <h2 className="text-3xl font-bold">
          Because You Watched
        </h2>

        <p className="text-gray-400 mt-6">
          Loading recommendations...
        </p>
      </section>
    );

  }

  return (

    <section className="max-w-7xl mx-auto px-8 py-12">

      <p className="uppercase tracking-[6px] text-red-500">
        Personalized
      </p>

      <h2 className="text-4xl font-bold mb-8">
        Because You Watched
      </h2>

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