const tiles = [
  {
    stat: "140 applicants.",
    headline: "Not one you would put in front of a regulator.",
    body: "Volume was never your problem. Screening is.",
  },
  {
    stat: "Eleven weeks.",
    headline: "The role has been open eleven weeks.",
    body: "Every week a named function sits vacant is a week you cannot evidence coverage.",
  },
  {
    stat: "Wrong pool.",
    headline: "You asked for an MLRO. They sent KYC analysts.",
    body: "Compliance is not one candidate pool. It is eight, and most agencies cannot tell them apart.",
  },
];

export function PainSection() {
  return (
    <section className="px-6 py-20 bg-[#f7fbfc]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#005f83]/50 mb-3">
            Sound familiar?
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#005f83] leading-tight tracking-tight">
            If You Are Hiring GRC in the UAE Right Now, One of These Is True
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiles.map((tile, i) => (
            <div key={i} className="rounded-2xl p-8 flex flex-col gap-3" style={{ background: "#005f83" }}>
              <div className="text-2xl font-black leading-tight" style={{
                background: "linear-gradient(45deg, #00bfff 0%, #45db33 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                {tile.stat}
              </div>
              <h3 className="text-lg font-black text-white leading-snug tracking-tight">{tile.headline}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{tile.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
