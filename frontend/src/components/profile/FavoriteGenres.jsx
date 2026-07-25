const FavoriteGenres = ({ profile }) => {
  const genres = profile?.favorite_genres || [];

  return (
    <section className="max-w-6xl mx-auto px-8 mt-14">
      <h2 className="text-3xl font-bold mb-6">
        Favorite Genres
      </h2>

      <div className="flex flex-wrap gap-4">
        {genres.length > 0 ? (
          genres.map((genre) => (<span key={genre} className="px-6 py-3 rounded-full bg-red-600 hover:bg-red-500 transition-all duration-300 shadow-lg hover:scale-105">{genre}</span>))
        ) : (
          <p className="text-gray-400">
            Search and explore movies to build your favorite genres.
          </p>
        )}
      </div>
    </section>
  );
};

export default FavoriteGenres;