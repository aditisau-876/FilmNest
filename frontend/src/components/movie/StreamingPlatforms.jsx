const StreamingPlatforms = ({ providers }) => {
  const allProviders = [...(providers?.flatrate || []), ...(providers?.rent || []),  ...(providers?.buy || []), ];
  if (allProviders.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto px-8 py-12">
      <h2 className="text-3xl font-bold mb-10">Available On</h2>
      <div className="grid md:grid-cols-4 gap-6">
        {allProviders.map((platform) => (
          <div key={platform.provider_id} className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-red-600 transition text-center">
            <img src={platform.logo_url} alt={platform.provider_name} className="h-16 mx-auto object-contain"/>
            <p className="mt-5 font-semibold">{platform.provider_name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StreamingPlatforms;