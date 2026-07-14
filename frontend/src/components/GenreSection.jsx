import { motion } from "framer-motion";

const genres = [
  {
    name: "Action",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba",
  },
  {
    name: "Sci-Fi",
    image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c",
  },
  {
    name: "Drama",
    image: "https://images.unsplash.com/photo-1513106580091-1d82408b8cd6",
  },
  {
    name: "Comedy",
    image: "https://images.unsplash.com/photo-1518998053901-5348d3961a04",
  },
  {
    name: "Horror",
    image: "https://images.unsplash.com/photo-1505685296765-3a2736de412f",
  },
  {
    name: "Animation",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26",
  },
];

const GenreSection = () => {
  return (
    <section className="bg-[#09090B] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="mb-14">

          <p className="uppercase tracking-[6px] text-red-500">
            Explore
          </p>

          <h2 className="hero-title text-5xl mt-3">
            Browse by Genre
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {genres.map((genre) => (

            <motion.div
              key={genre.name}
              whileHover={{
                scale: 1.04,
              }}
              className="
              relative
              h-64
              rounded-3xl
              overflow-hidden
              cursor-pointer
              group
              "
            >

              <img
                src={genre.image}
                alt={genre.name}
                className="
                w-full
                h-full
                object-cover
                group-hover:scale-110
                duration-700
                "
              />

              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition" />

              <div className="absolute inset-0 flex items-center justify-center">

                <h3 className="text-4xl font-bold hero-title">
                  {genre.name}
                </h3>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default GenreSection;