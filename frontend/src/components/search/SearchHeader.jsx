import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const SearchHeader = ({
  query,
  setQuery,
  genre,
  setGenre,
  year,
  setYear,
  cast,
  setCast,
}) => {

  const genres = [
    "All",
    "Action",
    "Drama",
    "Biography",
    "Sci-Fi",
    "Comedy",
    "Adventure",
    "Animation",
    "Thriller",
  ];

  const years = [
    "All",
    "2025",
    "2024",
    "2023",
    "2022",
    "2021",
    "2020",
  ];

  const casts = [
    "All",
    "Cillian Murphy",
    "Robert Pattinson",
    "Leonardo DiCaprio",
    "Tom Cruise",
    "Margot Robbie",
  ];

  return (
    <div className="sticky top-0 z-40 bg-[#09090B]/95 backdrop-blur-xl border-b border-white/10">

      <div className="max-w-7xl mx-auto px-8 py-6">

        <div className="flex items-center gap-6 mb-6">

          <Link to="/">
            <img
              src={logo}
              alt="FilmNest"
              className="h-12"
            />
          </Link>

          <div className="flex-1 relative">

            <Search
              className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search movies..."
              className="
                w-full
                bg-white/5
                border
                border-white/10
                rounded-full
                py-4
                pl-14
                pr-6
                outline-none
                focus:border-red-500
              "
            />

          </div>

        </div>

        <div className="grid md:grid-cols-3 gap-5">

          <select
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="bg-white/5 border border-white/10 rounded-xl p-4"
          >
            {genres.map((g) => (
              <option key={g}>{g}</option>
            ))}
          </select>

          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="bg-white/5 border border-white/10 rounded-xl p-4"
          >
            {years.map((y) => (
              <option key={y}>{y}</option>
            ))}
          </select>

          <select
            value={cast}
            onChange={(e) => setCast(e.target.value)}
            className="bg-white/5 border border-white/10 rounded-xl p-4"
          >
            {casts.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>

        </div>

      </div>

    </div>
  );
};

export default SearchHeader;