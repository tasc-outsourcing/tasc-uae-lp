import { Search, Clock, BarChart3, Users } from "lucide-react";

const tiles = [
  {
    icon: Search,
    title: "Screened for the right pool",
    body: "Financial crime, conduct, ERM, internal audit, IT and cyber risk, data protection, governance, data and AI governance. We shortlist against the pool the role belongs to, so you are not interviewing to find out what you needed.",
  },
  {
    icon: Clock,
    title: "Cover the seat while you search",
    body: "If a named role has gone vacant, we can place interim cover in days and run the permanent search behind it. Very few agencies in this market can do both.",
  },
  {
    icon: BarChart3,
    title: "Market rates before you commit",
    body: "You get current UAE benchmarks for the role with your shortlist. No going to budget twice.",
  },
  {
    icon: Users,
    title: "Emiratisation built in, not bolted on",
    body: "Every shortlist is built with your localisation position in view, including analyst and officer pipelines with progression attached.",
  },
];

export function WhatYouGet() {
  return (
    <section className="px-6 py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#005f83]/50 mb-3">
            What you receive
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#005f83] mb-4 leading-tight tracking-tight">
            What a GRC-Specialist Shortlist Actually Looks Like
          </h2>
          <p className="text-center text-[#005f83]/60 max-w-xl mx-auto text-sm">
            Not a CV blast. A shortlist built against the sub-specialism.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tiles.map((tile, i) => {
            const Icon = tile.icon;
            return (
              <div key={i} className="flex gap-5 p-8 rounded-2xl border-2 border-[#e8f4f8] transition-all duration-300"
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 2px #00bfff, 0 12px 28px -8px rgba(0,95,131,0.15)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "";
                }}
              >
                <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: "linear-gradient(45deg, #00bfff 0%, #45db33 100%)" }}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-[#005f83] mb-2 tracking-tight">{tile.title}</h3>
                  <p className="text-[#005f83]/65 text-sm leading-relaxed">{tile.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
