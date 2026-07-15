const genres = [
  "Action",
  "Sci-Fi",
  "Drama",
  "Adventure",
];

const FavoriteGenres = () => {
  return (
    <section className="max-w-6xl mx-auto px-8 mt-14">

      <h2 className="text-3xl font-bold mb-6">
        Favorite Genres
      </h2>

      <div className="flex flex-wrap gap-4">

        {genres.map((genre) => (
          <span
            key={genre}
            className="px-6 py-3 bg-red-600 rounded-full"
          >
            {genre}
          </span>
        ))}

      </div>

    </section>
  );
};

export default FavoriteGenres;