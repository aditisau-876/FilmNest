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
    "All Genres",
    "Action",
    "Adventure",
    "Animation",
    "Biography",
    "Comedy",
    "Crime",
    "Drama",
    "Fantasy",
    "Horror",
    "Mystery",
    "Romance",
    "Sci-Fi",
    "Thriller",
    "War",
  ];

  const casts = [
    "All Cast",
    "Cillian Murphy",
    "Robert Pattinson",
    "Leonardo DiCaprio",
    "Tom Cruise",
    "Margot Robbie",
    "Brad Pitt",
    "Christian Bale",
    "Keanu Reeves",
    "Ryan Gosling",
    "Scarlett Johansson",
  ];

  return (
    <div className="sticky top-20 z-30 bg-[#09090B]/95 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-8 py-6">
        <div className="flex items-center gap-6 mb-7">
          <div className="flex-1 relative">
            <Search size={20} className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"/>

            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search movies, actors..."
              className="
                w-full
                bg-[#171717]
                border
                border-white/10
                rounded-full
                py-4
                pl-14
                pr-6
                text-white
                placeholder:text-gray-500
                outline-none
                focus:border-red-600
                focus:ring-2
                focus:ring-red-600/20
                transition
              "
            />

          </div>

        </div>

        {/* Filters */}

        <div
          className="
            bg-white/5
            backdrop-blur-xl
            border
            border-white/10
            rounded-2xl
            p-5
            grid
            md:grid-cols-3
            gap-5
          "
        >

          {/* Genre */}

          <select
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="
              bg-[#171717]
              border
              border-white/10
              rounded-xl
              p-4
              text-white
              outline-none
              focus:border-red-600
              transition
              cursor-pointer
            "
          >
            {genres.map((g) => (
              <option
                key={g}
                value={g}
                className="bg-[#171717] text-white"
              >
                {g}
              </option>
            ))}
          </select>

          {/* Year */}

          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="
              bg-[#171717]
              border
              border-white/10
              rounded-xl
              p-4
              text-white
              outline-none
              focus:border-red-600
              transition
              cursor-pointer
            "
          >
            <option value="All">All Years</option>

            <optgroup label="2020 - Present">
              <option value="2025">2025</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
            </optgroup>

            <optgroup label="2010 - 2019">
              <option>2019</option>
              <option>2018</option>
              <option>2017</option>
              <option>2016</option>
              <option>2015</option>
              <option>2014</option>
              <option>2013</option>
              <option>2012</option>
              <option>2011</option>
              <option>2010</option>
            </optgroup>

            <optgroup label="2000 - 2009">
              <option>2009</option>
              <option>2008</option>
              <option>2007</option>
              <option>2006</option>
              <option>2005</option>
              <option>2004</option>
              <option>2003</option>
              <option>2002</option>
              <option>2001</option>
              <option>2000</option>
            </optgroup>

            <optgroup label="1990 - 1999">
              <option>1999</option>
              <option>1998</option>
              <option>1997</option>
              <option>1996</option>
              <option>1995</option>
              <option>1994</option>
              <option>1993</option>
              <option>1992</option>
              <option>1991</option>
              <option>1990</option>
            </optgroup>

            <optgroup label="Classic Cinema (Before 1990)">
              <option>1980s</option>
              <option>1970s</option>
              <option>1960s</option>
              <option>1950s</option>
              <option>1940s & Earlier</option>
            </optgroup>

          </select>

          {/* Cast */}

          <select
            value={cast}
            onChange={(e) => setCast(e.target.value)}
            className="
              bg-[#171717]
              border
              border-white/10
              rounded-xl
              p-4
              text-white
              outline-none
              focus:border-red-600
              transition
              cursor-pointer
            "
          >
            {casts.map((c) => (
              <option
                key={c}
                value={c}
                className="bg-[#171717] text-white"
              >
                {c}
              </option>
            ))}
          </select>

        </div>

      </div>

    </div>
  );
};

export default SearchHeader;