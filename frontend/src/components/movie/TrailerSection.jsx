const TrailerSection = ({ trailer }) => {
  if (!trailer?.youtube_key) return null;

  return (
    <section className="max-w-7xl mx-auto px-8 py-16">
      <h2 className="text-3xl font-bold mb-8">Official Trailer</h2>
      <div className="aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-xl">
        <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${trailer.youtube_key}`} title="Trailer" allowFullScreen/>
      </div>
    </section>
  );
};

export default TrailerSection;