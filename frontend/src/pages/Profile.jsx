import { useEffect, useState } from "react";
import axios from "axios";

import ProfileHeader from "../components/profile/ProfileHeader";
import StatsCards from "../components/profile/StatsCards";
import FavoriteGenres from "../components/profile/FavoriteGenres";
import ContinueWatching from "../components/profile/ContinueWatching";
import RecentActivity from "../components/profile/RecentActivity";
import ProfileActions from "../components/profile/ProfileActions";
import AppNavbar from "../components/AppNavbar";

const Profile = () => {

  const [profile, setProfile] = useState(null);
  const [watchHistory, setWatchHistory] = useState([]);
  const [recentActivity, setRecentActivity] = useState([]);

  useEffect(() => {

    const fetchProfile = async () => {

      try {

        const token = localStorage.getItem("token");

        const response = await axios.get(
          "http://localhost:8000/users/me",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setProfile(response.data);

      } catch (error) {
        console.error(error);
      }
    };

    const fetchWatchHistory = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await axios.get(
          "http://localhost:8000/users/watch-history",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setWatchHistory(response.data);

        } catch (error) {
        console.error(error);
      }
    };

    const fetchRecentActivity = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await axios.get(
          "http://localhost:8000/users/recent-activity",
          {
            headers: {
            Authorization: `Bearer ${token}`,
            },
          } 
        );

        setRecentActivity(response.data);

      } catch (error) {
        console.error(error);
      }
    };

    fetchProfile();
    fetchWatchHistory();
    fetchRecentActivity();

  }, []);

  return (
    <div className="min-h-screen bg-[#09090B] text-white">

      <AppNavbar />

      <ProfileHeader profile={profile} />

      <StatsCards stats={profile?.stats} />

      <FavoriteGenres profile={profile} />

      <ContinueWatching movies={watchHistory} />

      <RecentActivity activities={recentActivity} />

      <ProfileActions />

    </div>
  );
};

export default Profile;