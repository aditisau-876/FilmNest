import Navbar from "./Navbar";
import AppNavbar from "./AppNavbar";

const MovieNavbar = () => {
  const token = localStorage.getItem("token");
  return token ? <AppNavbar /> : <Navbar />;
};

export default MovieNavbar;