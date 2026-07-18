const RecentActivity = ({ activities = [] }) => {
  return (
    <section className="max-w-6xl mx-auto px-8 mt-14">
      <h2 className="text-3xl font-bold mb-6">
        Recent Activity
      </h2>

      <div className="space-y-4">

        {activities.length === 0 ? (
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-gray-400">
            No recent activity.
          </div>
        ) : (
          activities.map((activity, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-xl p-5"
            >
              {activity.type === "watchlist"
                ? `❤️ Added ${activity.title} to Watchlist`
                : `🎬 Watched ${activity.title}`}
            </div>
          ))
        )}

      </div>
    </section>
  );
};

export default RecentActivity;