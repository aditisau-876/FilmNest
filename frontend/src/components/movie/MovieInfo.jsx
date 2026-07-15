import { Calendar, Clock3, Globe, Film } from "lucide-react";

const MovieInfo = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 py-16">

      <h2 className="text-3xl font-bold mb-10">
        Movie Information
      </h2>

      <div className="grid lg:grid-cols-2 gap-10">

        <div>

          <h3 className="text-xl font-semibold mb-4">
            Synopsis
          </h3>

          <p className="text-gray-300 leading-8">

            Oppenheimer follows the life of theoretical physicist
            J. Robert Oppenheimer as he leads the Manhattan Project
            and struggles with the moral consequences of creating
            the atomic bomb.

          </p>

        </div>

        <div className="grid grid-cols-2 gap-6">

          <div className="bg-white/5 rounded-2xl p-6">
            <Calendar className="text-red-500 mb-3"/>
            <h4 className="font-semibold">Release</h4>
            <p className="text-gray-400">21 July 2023</p>
          </div>

          <div className="bg-white/5 rounded-2xl p-6">
            <Clock3 className="text-red-500 mb-3"/>
            <h4 className="font-semibold">Runtime</h4>
            <p className="text-gray-400">180 Minutes</p>
          </div>

          <div className="bg-white/5 rounded-2xl p-6">
            <Film className="text-red-500 mb-3"/>
            <h4 className="font-semibold">Genre</h4>
            <p className="text-gray-400">
              Biography • Drama
            </p>
          </div>

          <div className="bg-white/5 rounded-2xl p-6">
            <Globe className="text-red-500 mb-3"/>
            <h4 className="font-semibold">Language</h4>
            <p className="text-gray-400">English</p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default MovieInfo;