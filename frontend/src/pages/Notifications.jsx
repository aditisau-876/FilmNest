import NotificationHeader from "../components/notifications/NotificationHeader";
import NotificationList from "../components/notifications/NotificationList";
import AppNavbar from "../components/AppNavbar";
const notifications = [

  {
    id:1,
    type:"recommendation",
    title:"Recommended For You",
    message:"Because you enjoyed Interstellar, you may love Arrival.",
    time:"2 mins ago",
  },

  {
    id:2,
    type:"watchlist",
    title:"Watchlist Update",
    message:"Oppenheimer is now streaming on JioHotstar.",
    time:"30 mins ago",
  },

  {
    id:3,
    type:"trending",
    title:"Trending Now",
    message:"Mission Impossible is currently #1 worldwide.",
    time:"1 hour ago",
  },

  {
    id:4,
    type:"trailer",
    title:"New Trailer",
    message:"The official Dune Messiah trailer has been released.",
    time:"Today",
  },

];

const Notifications = () => {

  return (

    <div className="min-h-screen bg-[#09090B] text-white">
      <AppNavbar/>
      <NotificationHeader />

      <NotificationList
        notifications={notifications}
      />

    </div>

  );

};

export default Notifications;