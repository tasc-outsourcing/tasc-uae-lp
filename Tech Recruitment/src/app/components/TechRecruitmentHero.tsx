import { ArrowRight } from "lucide-react";
import { HubSpotForm } from "./HubSpotForm";

export function TechRecruitmentHero() {
  const stats = [
    { value: "300+", label: "GCC-based technology clients" },
    { value: "500+", label: "mid-to-senior positions filled last year" },
    { value: "78+", label: "diverse nationalities placed" },
  ];

  return (
    <section className="relative flex items-center px-6 py-16 overflow-hidden min-h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1512453979798-5ea266f8880c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEdWJhaSUyMHNreWxpbmUlMjBtb2Rlcm4lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc4NDE4ODM2Nnww&ixlib=rb-4.1.0&q=80&w=1080)`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--tasc-navy-dark)]/95 via-[var(--tasc-navy)]/85 to-[var(--tasc-navy-dark)]/90"></div>

      {/* Floating orbs */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full blur-xl animate-pulse" style={{ background: "var(--tasc-gradient)" }}></div>
        <div className="absolute bottom-32 right-20 w-24 h-24 rounded-full blur-xl animate-pulse delay-1000" style={{ background: "var(--tasc-gradient)" }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — hero copy + stats */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Specialist Tech Recruitment Across<br />
              <span className="tasc-gradient-text-enhanced">AI, Cloud, Cybersecurity & ERP</span>
            </h1>

            <p className="text-lg text-white/85 leading-relaxed mb-8">
              Deep specialist talent across eight technology domains — placed by recruiters who know your stack, your sector, and your market. Recruitment across the UAE and KSA, fulfilled by our dedicated tech brand, AIQU.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-white font-semibold text-base tasc-hover-lift shadow-xl transition-all border-0"
                style={{ background: "var(--tasc-gradient)" }}
                onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
              >
                Find Talent in Your Domain
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border-2 border-white bg-white/10 text-white font-semibold text-base backdrop-blur-sm tasc-hover-lift transition-all hover:bg-white hover:text-[var(--tasc-navy)]"
                onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
              >
                Book a Consultation
              </button>
            </div>

            {/* Stats band */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="bg-white/95 rounded-2xl p-5 text-center tasc-hover-lift transition-all hover:scale-105">
                  <div className="text-3xl font-bold mb-1" style={{ color: "var(--tasc-navy)" }}>{stat.value}</div>
                  <p className="text-xs text-[var(--tasc-dark-gray)] leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — consultation form */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <h3 className="text-xl font-bold text-[var(--tasc-navy)] mb-1">Get Your Free Consultation</h3>
            <p className="text-sm text-[var(--tasc-dark-gray)] mb-6">
              Tell us about your staffing needs and we'll get back to you within 24 hours with a tailored solution.
            </p>

            <HubSpotForm
              portalId="20309062"
              formId="052af855-0fe5-4a73-89a4-279a76f97319"
              region="na1"
              className="tasc-hubspot-form"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
