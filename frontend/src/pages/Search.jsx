import { useState } from "react";

import SearchHeader from "../components/search/SearchHeader";
import SearchGrid from "../components/search/SearchGrid";

import {
  trendingMovies,
  newReleases,
  topRatedMovies,
} from "../data/movies";

const allMovies = [
  ...trendingMovies,
  ...newReleases,
  ...topRatedMovies,
];

const Search = () => {
  // Search states
  const [query, setQuery] = useState("");
  const [genre, setGenre] = useState("All");
  const [year, setYear] = useState("All");
  const [cast, setCast] = useState("All");

  // Filter movies
  const filteredMovies = allMovies.filter((movie) => {
    const matchTitle =
      movie.title.toLowerCase().includes(query.toLowerCase());

    const matchGenre =
      genre === "All" || movie.genre === genre;

    const matchYear =
      year === "All" || movie.year.toString() === year;

    const matchCast =
      cast === "All" || movie.cast === cast;

    return (
      matchTitle &&
      matchGenre &&
      matchYear &&
      matchCast
    );
  });

  return (
    <div className="min-h-screen bg-[#09090B] text-white">

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

      <SearchGrid
        movies={filteredMovies}
      />

    </div>
  );
};

export default Search;