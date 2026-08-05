import { Quote } from "lucide-react";

const stats = [
  { value: "19+", label: "Years staffing the UAE market" },
  { value: "150+", label: "GRC & compliance roles filled in the last 12 months" },
  { value: "5 days", label: "Average days to first shortlist" },
  { value: "91%", label: "12-month placement retention rate" },
];

export function ProofStrip() {
  return (
    <section className="px-6 py-20" style={{ background: "linear-gradient(135deg, #003d57 0%, #005f83 60%, #004a6a 100%)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-white/40 mb-3">
            The numbers
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white leading-tight tracking-tight">
            19+ Years. One Specialist Market.
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {stats.map((stat, i) => (
            <div key={i} className="text-center p-6 rounded-2xl backdrop-blur-sm" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}>
              <div className="text-4xl md:text-5xl font-black mb-2 inline-block" style={{
                background: "linear-gradient(45deg, #00bfff 0%, #45db33 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                {stat.value}
              </div>
              <div className="text-white/65 text-xs leading-snug mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="max-w-3xl mx-auto rounded-2xl p-8 text-center backdrop-blur-sm"
          style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}>
          <Quote className="w-8 h-8 mx-auto mb-4 opacity-50" style={{ color: "#00bfff" }} />
          <blockquote className="text-white text-lg md:text-xl font-medium leading-relaxed mb-6 italic">
            "TASC understood immediately that we needed a financial crime specialist, not a generic compliance candidate. The shortlist was on our desk in four days and the MLRO they placed is still with us two years in."
          </blockquote>
          <div className="text-sm font-bold" style={{
            background: "linear-gradient(45deg, #00bfff 0%, #45db33 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            Head of Compliance — UAE Retail Bank
          </div>
        </div>
      </div>
    </section>
  );
}
