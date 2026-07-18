import { Film, Heart, Star } from "lucide-react";

const StatsCards = ({ stats }) => {

  const cards = [
    {
      title: "Movies Watched",
      value: stats?.movies_watched ?? 0,
      icon: Film,
    },
    {
      title: "Watchlist",
      value: stats?.watchlist_count ?? 0,
      icon: Heart,
    },
    {
      title: "Reviews",
      value: stats?.reviews_count ?? 0,
      icon: Star,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-8">
      <div className="grid md:grid-cols-3 gap-6">

        {cards.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center"
            >
              <Icon
                className="mx-auto text-red-500"
                size={34}
              />

              <h2 className="text-4xl font-bold mt-4">
                {item.value}
              </h2>

              <p className="text-gray-400 mt-2">
                {item.title}
              </p>

            </div>
          );
        })}

      </div>
    </div>
  );
};

export default StatsCards;