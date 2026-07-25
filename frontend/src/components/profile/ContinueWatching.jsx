const ContinueWatching = ({ movies }) => {
  return (
    <section className="max-w-6xl mx-auto px-8 mt-14">

      <h2 className="text-3xl font-bold mb-8">
        Continue Watching
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-6">

        {movies.map((movie) => (
          <div key={movie.id}>
            <img src={movie.poster_url} alt={movie.title} className="rounded-xl"/>
            <h3 className="mt-3 font-semibold">{movie.title}</h3>
          </div>
        ))}

      </div>

    </section>
  );
};

export default ContinueWatching;