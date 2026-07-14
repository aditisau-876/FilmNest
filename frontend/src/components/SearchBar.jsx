import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="w-full max-w-3xl px-4 sm:px-0">
      <div
        className="
          flex
          items-center
          bg-white/10
          backdrop-blur-xl
          border
          border-white/20
          rounded-full
          overflow-hidden
          transition-all
          duration-300
          focus-within:border-red-600
          focus-within:shadow-[0_0_35px_rgba(229,9,20,0.45)]
        "
      >
        <Search
          className="ml-4 sm:ml-6 text-gray-300"
          size={20}
        />

        <input
          type="text"
          placeholder="Search movies..."
          className="
            flex-1
            bg-transparent
            px-3
            sm:px-4
            py-3
            sm:py-5
            text-sm
            sm:text-lg
            outline-none
            placeholder:text-gray-400
          "
        />

        <button
          className="
            bg-red-600
            hover:bg-red-700
            transition
            px-4
            sm:px-8
            py-3
            sm:py-5
            text-sm
            sm:text-base
            font-semibold
            whitespace-nowrap
          "
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;