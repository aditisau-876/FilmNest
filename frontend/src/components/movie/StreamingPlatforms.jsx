const platforms = [
  {
    name: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/75/Netflix_icon.svg",
  },
  {
    name: "Prime Video",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png",
  },
  {
    name: "Disney+",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg",
  },
  {
    name: "JioHotstar",
    logo: "https://tse2.mm.bing.net/th/id/OIP.L9g7DI-u07_Hdot3wWY36wHaDQ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
];

const StreamingPlatforms = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 py-10">

      <h2 className="text-3xl font-bold mb-10">
        Available On
      </h2>

      <div className="grid md:grid-cols-4 gap-6">

        {platforms.map((platform) => (

          <div
            key={platform.name}
            className="
            bg-white/5
            rounded-2xl
            p-8
            border
            border-white/10
            hover:border-red-500
            transition
            cursor-pointer
            text-center
            "
          >

            <img
              src={platform.logo}
              alt={platform.name}
              className="h-14 mx-auto object-contain"
            />

            <p className="mt-5 font-semibold">
              {platform.name}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
};

export default StreamingPlatforms;