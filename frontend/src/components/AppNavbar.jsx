import { useEffect, useState } from "react";
import axios from "axios";
import {
  Bell,
  Heart,
  Home,
  Menu,
  Search,
  User,
  Sparkles,
  X,
  LogOut,
} from "lucide-react";
import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
import {
  motion,
  AnimatePresence,
} from "framer-motion";

import logo from "../assets/logo.png";

const AppNavbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [profile, setProfile] = useState(null);

  const navItems = [
    {
      name: "Home",
      path: "/dashboard",
      icon: Home,
    },
    {
      name: "Search",
      path: "/search",
      icon: Search,
    },
    {
      name: "Watchlist",
      path: "/watchlist",
      icon: Heart,
    },
  ];

  useEffect(() => {
    const fetchNavbarData = async () => {
      try {
        const token = localStorage.getItem("token");

        const [notificationRes, profileRes] =
          await Promise.allSettled([
            axios.get(
              "http://localhost:8000/notifications",
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            ),

            axios.get(
              "http://localhost:8000/users/me",
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            ),
          ]);

        if (notificationRes.status === "fulfilled") {
          setNotifications(notificationRes.value.data);
        }

        if (profileRes.status === "fulfilled") {
          setProfile(profileRes.value.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchNavbarData();
  }, []);

  const handleAIScroll = () => {
    if (location.pathname === "/dashboard") {
      const section = document.getElementById(
        "ai-recommendation"
      );

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      navigate("/dashboard");

      setTimeout(() => {
        const section = document.getElementById(
          "ai-recommendation"
        );

        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 300);
    }
  };

  const handleLogoClick = () => {
    if (
      location.pathname === "/dashboard" ||
      location.pathname.startsWith("/movie/")
    ) {
      navigate("/dashboard");

      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, 100);
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-2xl border-b border-white/10">
        <div className="max-w-7xl mx-auto h-20 px-8 flex justify-between items-center">
          <button
            onClick={handleLogoClick}
            className="cursor-pointer"
          >
            <img
              src={logo}
              alt="FilmNest"
              className="h-14"
            />
          </button>

          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center gap-2 transition ${
                    location.pathname === item.path
                      ? "text-red-500"
                      : "text-white hover:text-red-500"
                  }`}
                >
                  <Icon size={18} />
                  {item.name}
                </Link>
              );
            })}

            <button
              onClick={handleAIScroll}
              className="flex items-center gap-2 text-white hover:text-red-500 transition"
            >
              <Sparkles size={18} />
              AI
            </button>
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <Link
              to="/notifications"
              className="relative"
            >
              <Bell
                className={`transition ${
                  location.pathname === "/notifications"
                    ? "text-red-500"
                    : "hover:text-red-500"
                }`}
              />

              {notifications.length > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-600 text-xs flex items-center justify-center">
                  {notifications.length}
                </span>
              )}
            </Link>

            <Link
              to="/profile"
              className="flex items-center gap-3 hover:opacity-90 transition"
            >
              <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center">
                <User size={20} />
              </div>

              <div>
                <p className="font-semibold">
                  {profile?.username || "User"}
                </p>

                <p className="text-xs text-gray-400">
                  View Profile
                </p>
              </div>
            </Link>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: 300 }}
            animate={{ x: 0 }}
            exit={{ x: 300 }}
            transition={{ duration: 0.25 }}
            className="fixed right-0 top-20 w-72 h-screen bg-[#121212] border-l border-white/10 z-40"
          >
            <div className="p-8 space-y-7">
              {navItems.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-4"
                  >
                    <Icon />
                    {item.name}
                  </Link>
                );
              })}

              <button
                onClick={() => {
                  setMenuOpen(false);
                  handleAIScroll();
                }}
                className="flex items-center gap-4"
              >
                <Sparkles />
                AI Recommendation
              </button>

              <Link
                to="/notifications"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <Bell />
                  Notifications
                </div>

                {notifications.length > 0 && (
                  <span className="w-5 h-5 rounded-full bg-red-600 text-xs flex items-center justify-center">
                    {notifications.length}
                  </span>
                )}
              </Link>

              <Link
                to="/profile"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-4"
              >
                <User />
                {profile?.username || "Profile"}
              </Link>

              <button className="flex items-center gap-4 text-red-500">
                <LogOut />
                Logout
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AppNavbar;