const CastSection = ({ cast }) => {

  if (!cast?.length) return null;

  return (

    <section className="max-w-7xl mx-auto px-8 py-14">

      <h2 className="text-3xl font-bold mb-8">

        Cast

      </h2>

      <div className="flex gap-8 overflow-x-auto scrollbar-hide">

        {cast.map((actor) => (

          <div
            key={actor.id}
            className="min-w-[180px] text-center"
          >

            <img
              src={actor.profile_url}
              alt={actor.name}
              className="
              w-40
              h-40
              rounded-full
              object-cover
              mx-auto
              border
              border-white/10
              "
            />

            <h3 className="mt-4 font-semibold">

              {actor.name}

            </h3>

            <p className="text-gray-400 text-sm mt-1">

              {actor.character}

            </p>

          </div>

        ))}

      </div>

    </section>

  );

};

export default CastSection;