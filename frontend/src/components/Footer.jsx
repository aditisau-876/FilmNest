import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-12">

          {/* Logo */}
          <div>
            <h2 className="hero-title text-4xl mb-4">
              FILM
              <span className="text-red-600">NEST</span>
            </h2>

            <p className="text-gray-400 leading-7">
              Discover trending movies, official trailers,
              reviews, streaming platforms, and build
              your own watchlist.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-xl mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-red-600 cursor-pointer transition">
                Home
              </li>

              <li className="hover:text-red-600 cursor-pointer transition">
                Trending
              </li>

              <li className="hover:text-red-600 cursor-pointer transition">
                Genres
              </li>

              <li className="hover:text-red-600 cursor-pointer transition">
                Watchlist
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-xl mb-5">
              Contact
            </h3>

            <div className="flex items-center gap-3 text-gray-300">
              <FaEnvelope className="text-red-600" />
              <span>contact@filmnest.com</span>
            </div>

            <div className="flex gap-5 mt-6 text-2xl text-white">

              <FaFacebookF className="cursor-pointer transition duration-300 hover:text-red-600 hover:scale-110" />

              <FaInstagram className="cursor-pointer transition duration-300 hover:text-red-600 hover:scale-110" />

              <FaYoutube className="cursor-pointer transition duration-300 hover:text-red-600 hover:scale-110" />

              <FaGithub className="cursor-pointer transition duration-300 hover:text-red-600 hover:scale-110" />

            </div>
          </div>

        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-500">
          © 2026 FilmNest. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;