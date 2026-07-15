import ProfileHeader from "../components/profile/ProfileHeader";
import StatsCards from "../components/profile/StatsCards";
import FavoriteGenres from "../components/profile/FavoriteGenres";
import ContinueWatching from "../components/profile/ContinueWatching";
import RecentActivity from "../components/profile/RecentActivity";
import ProfileActions from "../components/profile/ProfileActions";
import AppNavbar from "../components/AppNavbar";
import { trendingMovies } from "../data/movies";

const Profile = () => {
  return (
    <div className="min-h-screen bg-[#09090B] text-white">
      <AppNavbar/>
      <ProfileHeader />

      <StatsCards />

      <FavoriteGenres />

      <ContinueWatching movies={trendingMovies.slice(0, 5)} />

      <RecentActivity />

      <ProfileActions />

    </div>
  );
};

export default Profile;