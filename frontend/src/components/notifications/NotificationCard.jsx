import {
  Bell,
  Film,
  Heart,
  Sparkles,
} from "lucide-react";

import { formatDistanceToNow } from "date-fns";

const icons = {
  recommendation: <Sparkles className="text-yellow-400" />,
  watchlist: <Heart className="text-red-500" />,
  trailer: <Film className="text-blue-400" />,
  trending: <Bell className="text-green-400" />,
};

const NotificationCard = ({ notification }) => {

  return (

    <div
      className="
      bg-white/5
      border
      border-white/10
      rounded-2xl
      p-6
      hover:border-red-500
      transition
      "
    >

      <div className="flex gap-5">

        <div className="text-3xl">
          {icons[notification.type]}
        </div>

        <div className="flex-1">

          <h3 className="font-bold text-xl">
            {notification.title}
          </h3>

          <p className="text-gray-400 mt-2 leading-7">
            {notification.message}
          </p>

          <span className="text-gray-500 text-sm mt-4 block">
            {formatDistanceToNow(
              new Date(notification.created_at),
              { addSuffix: true }
            )}
          </span>

        </div>

      </div>

    </div>

  );

};

export default NotificationCard;