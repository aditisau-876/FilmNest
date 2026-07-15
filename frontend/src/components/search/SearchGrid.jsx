import SearchCard from "./SearchCard";
import NoResults from "./NoResults";

const SearchGrid = ({ movies }) => {
  if (movies.length === 0) {
    return <NoResults />;
  }

  return (
    <div className="max-w-7xl mx-auto px-8 py-12">

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

        {movies.map((movie, index) => (
          <SearchCard
            key={index}
            movie={movie}
          />
        ))}

      </div>

    </div>
  );
};

export default SearchGrid;