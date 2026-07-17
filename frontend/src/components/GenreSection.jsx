import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const genres = [
  {
    id: 28,
    name: "Action",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba",
  },
  {
    id: 878,
    name: "Sci-Fi",
    image:
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c",
  },
  {
    id: 18,
    name: "Drama",
    image:
      "https://images.unsplash.com/photo-1513106580091-1d82408b8cd6",
  },
  {
    id: 35,
    name: "Comedy",
    image:
      "https://images.unsplash.com/photo-1518998053901-5348d3961a04",
  },
  {
    id: 27,
    name: "Horror",
    image:
      "https://images.unsplash.com/photo-1505685296765-3a2736de412f",
  },
  {
    id: 16,
    name: "Animation",
    image:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26",
  },
];

const GenreSection = () => {
  const navigate = useNavigate();

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
              key={genre.id}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              transition={{ duration: 0.3 }}
              onClick={() =>
                navigate(`/search?genre=${genre.id}`)
              }
              className="
                relative
                h-64
                rounded-3xl
                overflow-hidden
                cursor-pointer
                group
                shadow-xl
              "
            >

              <img
                src={genre.image}
                alt={genre.name}
                className="
                  w-full
                  h-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-110
                "
              />

              {/* Overlay */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black
                  via-black/50
                  to-transparent
                  group-hover:from-black/90
                  transition
                "
              />

              {/* Content */}

              <div
                className="
                  absolute
                  inset-0
                  flex
                  flex-col
                  justify-end
                  p-8
                "
              >

                <h3 className="text-4xl font-bold hero-title">
                  {genre.name}
                </h3>

                <div
                  className="
                    flex
                    items-center
                    gap-2
                    mt-4
                    text-red-500
                    opacity-0
                    group-hover:opacity-100
                    transition
                  "
                >
                  <span className="font-medium">
                    Explore
                  </span>

                  <ArrowRight size={18} />
                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default GenreSection;