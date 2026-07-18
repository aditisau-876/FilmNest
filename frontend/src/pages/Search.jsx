import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AppNavbar from "../components/AppNavbar";
import SearchHeader from "../components/search/SearchHeader";
import SearchGrid from "../components/search/SearchGrid";

import { searchMovies } from "../api/movies";

const Search = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [query, setQuery] = useState(
    searchParams.get("q") || ""
  );

  const [genre, setGenre] = useState(
    searchParams.get("genre") || ""
  );

  const [year, setYear] = useState("All");
  const [cast, setCast] = useState("All Cast");

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    const timer = setTimeout(async () => {
      try {
        setLoading(true);

        const result = await searchMovies(
          query,
          genre === "" ? undefined : Number(genre),
          year === "All" ? undefined : Number(year),
          cast === "All Cast" ? undefined : cast
        );

        console.log("Movies received:", result);

        setMovies(result);
      } catch (err) {
        console.error("Search failed:", err);
        setMovies([]);
      } finally {
        setLoading(false);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [query, genre, year, cast]);

  return (
    <div className="min-h-screen bg-[#09090B] text-white">
      <AppNavbar />

      <SearchHeader
        query={query}
        setQuery={setQuery}
        genre={genre}
        setGenre={setGenre}
        year={year}
        setYear={setYear}
        cast={cast}
        setCast={setCast}
      />

      {loading ? (
        <div className="py-20 text-center text-gray-400">
          Searching...
        </div>
      ) : (
        <SearchGrid movies={movies} />
      )}
    </div>
  );
};

export default Search;