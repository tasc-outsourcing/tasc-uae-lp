import { Shield, TrendingUp } from "lucide-react";
import aiquLogo from "../../imports/AIQU-Logo.png";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";

export function PoweredByAIQU() {
  return (
    <section className="py-20 px-6 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-[var(--tasc-brand-green)] to-[var(--tasc-accent-blue)] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-tl from-[var(--tasc-navy)] to-[var(--tasc-brand-green)] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          {/* AIQU Logo */}
          <div className="flex justify-center mb-6">
            <ImageWithFallback
              src={aiquLogo}
              alt="AIQU — TASC's dedicated tech talent brand"
              className="h-16 w-auto object-contain"
            />
          </div>

          <h2 className="text-4xl font-bold mb-6 text-[var(--tasc-navy)]">
            Specialist Recruitment, Delivered by AIQU
          </h2>

          <p className="text-lg md:text-xl text-[var(--tasc-dark-gray)] leading-relaxed mb-12 max-w-4xl mx-auto">
            Technology sourcing, screening, and placement on this page are fulfilled by <span className="font-semibold text-[var(--tasc-navy)]">AIQU</span>, TASC's dedicated tech talent brand — while TASC provides the visa sponsorship, payroll, EOR, and compliance backbone across the UAE and KSA. The focus of a niche tech recruiter, backed by the scale and licensing of one of the region's most established workforce providers.
          </p>
        </div>

        {/* Value Props */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-[var(--tasc-brand-green)]/5 to-[var(--tasc-bright-green)]/5 rounded-2xl p-8 border border-[var(--tasc-brand-green)]/20 tasc-hover-lift">
            <div className="w-12 h-12 bg-gradient-to-br from-[var(--tasc-brand-green)]/10 to-[var(--tasc-bright-green)]/10 rounded-xl flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-[var(--tasc-brand-green)]" />
            </div>
            <h3 className="text-xl font-bold text-[var(--tasc-navy)] mb-3">Niche Tech Expertise</h3>
            <p className="text-[var(--tasc-dark-gray)] leading-relaxed">
              AIQU's specialist recruiters live and breathe technology — from AI and cloud to cybersecurity and industrial automation.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[var(--tasc-accent-blue)]/5 to-[var(--tasc-navy)]/5 rounded-2xl p-8 border border-[var(--tasc-accent-blue)]/20 tasc-hover-lift">
            <div className="w-12 h-12 bg-gradient-to-br from-[var(--tasc-accent-blue)]/10 to-[var(--tasc-navy)]/10 rounded-xl flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-[var(--tasc-accent-blue)]" />
            </div>
            <h3 className="text-xl font-bold text-[var(--tasc-navy)] mb-3">Enterprise-Grade Infrastructure</h3>
            <p className="text-[var(--tasc-dark-gray)] leading-relaxed">
              TASC's established presence ensures full legal compliance, fast visa processing, and seamless payroll across the GCC.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
