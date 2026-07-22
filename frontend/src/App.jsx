import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import AIRecommendations from "./pages/AIRecommendations";
import MovieDetails from "./pages/MovieDetails";
import Search from "./pages/Search";
import Watchlist from "./pages/Watchlist";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
      <Route path="/search" element={<Search />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/ai-results" element={<AIRecommendations />} />
        <Route path="/watchlist" element={<Watchlist />}/>
        <Route path="/notifications" element={<Notifications />}/>
        <Route path="/profile" element={<Profile />}/>
      </Route>
    </Routes>
  );
}

export default App;