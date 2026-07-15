import RecommendationCard from "./RecommendationCard";

import {
  trendingMovies,
} from "../../data/movies";

const RecommendationGrid = () => {

  return (

    <section className="max-w-7xl mx-auto px-8 py-12">

      <h2 className="text-3xl font-bold mb-8">

        Recommended For You

      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">

        {trendingMovies.slice(0,5).map((movie)=>(

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