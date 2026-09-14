import { useEffect, useState } from "react";
import axios from "axios";

import NotificationHeader from "../components/notifications/NotificationHeader";
import NotificationList from "../components/notifications/NotificationList";
import AppNavbar from "../components/AppNavbar";

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await axios.get(
          "https://filmnest-backend.onrender.com/notifications",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setNotifications(response.data);

      } catch (error) {
  console.log(error.response);
  console.log(error.response?.data);
  console.log(error);
}
    };

    fetchNotifications();
  }, []);

  return (
    <div className="min-h-screen bg-[#09090B] text-white">

      <AppNavbar />

      <NotificationHeader />

      <NotificationList
        notifications={notifications}
      />

    </div>
  );
};

export default Notifications;