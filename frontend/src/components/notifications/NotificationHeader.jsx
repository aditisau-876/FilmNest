import { Bell } from "lucide-react";
const NotificationHeader = () => {

  return (
    <section className="pt-32 pb-10 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-8">
        <h1 className="text-5xl font-black flex items-center gap-4"><Bell className="text-red-600 fill-red-600"/>Notifications</h1>
        <p className="text-gray-400 mt-4">Stay updated with recommendations, trailers, watchlist updates, and trending movies.</p>
      </div>
    </section>
  );

};

export default NotificationHeader;