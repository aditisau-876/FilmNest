const cast = [
  {
    name: "Cillian Murphy",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300",
  },
  {
    name: "Emily Blunt",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300",
  },
  {
    name: "Matt Damon",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300",
  },
  {
    name: "Robert Downey Jr.",
    image:
      "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=300",
  },
];

const CastSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 py-14">

      <h2 className="text-3xl font-bold mb-8">
        Cast
      </h2>

      <div className="flex gap-8 overflow-x-auto scrollbar-hide">

        {cast.map((actor) => (

          <div
            key={actor.name}
            className="min-w-[180px] text-center"
          >

            <img
              src={actor.image}
              alt={actor.name}
              className="w-40 h-40 rounded-full object-cover mx-auto"
            />

            <h3 className="mt-4 font-semibold">
              {actor.name}
            </h3>

          </div>

        ))}

      </div>

    </section>
  );
};

export default CastSection;