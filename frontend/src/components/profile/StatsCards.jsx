import { Film, Heart, Star } from "lucide-react";

const stats = [
  {
    title: "Movies Watched",
    value: "25",
    icon: Film,
  },
  {
    title: "Watchlist",
    value: "12",
    icon: Heart,
  },
  {
    title: "Reviews",
    value: "8",
    icon: Star,
  },
];

const StatsCards = () => {
  return (
    <div className="max-w-6xl mx-auto px-8">

      <div className="grid md:grid-cols-3 gap-6">

        {stats.map((item, index) => {
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