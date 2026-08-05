import { CheckCircle } from "lucide-react";
import heroImage from "@/assets/grc-recruitment-hero.jpg";
import { HubSpotForm } from "./HubSpotForm";

export function GRCHero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="GRC professionals in a boardroom meeting"
          className="w-full h-full object-cover object-center"
        />
        {/* Deep teal overlay — solid brand navy dominates, photo adds texture only */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, #002f45 0%, #004d6e 50%, #003d57 100%)", opacity: 0.93 }} />
      </div>

      <div className="relative pt-28 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Left: Copy */}
            <div className="text-white">
              <div className="inline-block mb-5">
                <span className="text-sm font-semibold tracking-widest uppercase px-4 py-2 rounded-full border border-white/25 text-white/75"
                  style={{ background: "rgba(0,191,255,0.15)" }}>
                  GRC Recruitment · United Arab Emirates
                </span>
              </div>

              <h1 className="text-4xl md:text-[2.85rem] font-black leading-tight mb-6 tracking-tight">
                GRC Talent in the UAE,{" "}
                <span className="inline-block" style={{
                  background: "linear-gradient(45deg, #00bfff 0%, #45db33 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  Shortlisted in 5 Working Days.
                </span>
              </h1>

              <p className="text-lg text-white/90 mb-8 leading-relaxed font-light">
                Compliance, risk, internal audit, AML and governance professionals for regulated UAE businesses — permanent, contract, or interim cover for a seat that cannot sit empty.
              </p>

              <ul className="space-y-4 mb-10">
                {[
                  "Screened by sub-specialism — financial crime, conduct, ERM, audit, IT risk — not by job title",
                  "Interim cover in days when a named regulatory role goes vacant",
                  "Emiratisation-ready pools for banking and financial services",
                ].map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center"
                      style={{ background: "linear-gradient(45deg, #00bfff, #45db33)" }}>
                      <CheckCircle className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                    </span>
                    <span className="text-white/95 leading-snug text-sm">{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Stats strip */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/20">
                {[
                  { val: "19+", label: "Years in UAE" },
                  { val: "5 days", label: "To shortlist" },
                  { val: "91%", label: "Retention rate" },
                ].map((s) => (
                  <div key={s.val} className="text-center">
                    <div className="text-2xl font-black" style={{
                      background: "linear-gradient(45deg, #00bfff 0%, #45db33 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}>{s.val}</div>
                    <div className="text-white/70 text-xs mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <div className="mb-6">
                <h2 className="text-xl font-bold text-[#005f83] mb-1">
                  Get a shortlist and the market rate for your role
                </h2>
                <p className="text-[#005f83]/55 text-sm">
                  No CV blast. One senior consultant scopes it and comes back within one business day.
                </p>
              </div>
              <HubSpotForm className="grc-hubspot-form" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
