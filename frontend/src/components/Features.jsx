import {
  Film,
  Heart,
  Star,
  Tv,
  Clapperboard,
  Sparkles,
} from "lucide-react";

import FeatureCard from "./FeatureCard";

const Features = () => {
  const features = [
    {
      icon: <Film size={40} />,
      title: "Latest Movies",
      description:
        "Explore the newest blockbusters and trending releases updated daily.",
    },
    {
      icon: <Heart size={40} />,
      title: "Watchlist",
      description:
        "Save your favorite movies and revisit them anytime.",
    },
    {
      icon: <Star size={40} />,
      title: "Ratings & Reviews",
      description:
        "Read community ratings and reviews before you watch.",
    },
    {
      icon: <Tv size={40} />,
      title: "Streaming Platforms",
      description:
        "Find exactly where every movie is available to stream.",
    },
    {
      icon: <Clapperboard size={40} />,
      title: "Official Trailers",
      description:
        "Watch high-quality trailers directly from the movie page.",
    },
    {
      icon: <Sparkles size={40} />,
      title: "Smart Recommendations",
      description:
        "Receive personalized movie suggestions based on your interests.",
    },
  ];

  return (
    <section className="py-28 px-6 bg-[#09090B]">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl hero-title text-center mb-5">
          Why Choose FilmNest?
        </h2>

        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16 text-lg">
          Everything you need in one place to discover,
          explore, and organize your movie journey.
        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;