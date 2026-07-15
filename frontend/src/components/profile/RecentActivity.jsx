const RecentActivity = () => {
  const activities = [
    "❤️ Added Oppenheimer to Watchlist",
    "⭐ Rated Interstellar 5 Stars",
    "🎬 Watched Dune Part Two",
    "❤️ Added Joker to Watchlist",
  ];

  return (
    <section className="max-w-6xl mx-auto px-8 mt-14">

      <h2 className="text-3xl font-bold mb-6">
        Recent Activity
      </h2>

      <div className="space-y-4">

        {activities.map((item, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-xl p-5"
          >
            {item}
          </div>
        ))}

      </div>

    </section>
  );
};

export default RecentActivity;