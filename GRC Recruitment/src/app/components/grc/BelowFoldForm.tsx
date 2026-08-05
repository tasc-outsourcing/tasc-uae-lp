import { Phone } from "lucide-react";
import { HubSpotForm } from "./HubSpotForm";

export function BelowFoldForm() {
  return (
    <section className="px-6 py-20" style={{ background: "linear-gradient(135deg, #003d57 0%, #005f83 60%, #004a6a 100%)" }}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight tracking-tight">
            Tell Us the Role. We Will Come Back With a Shortlist and the Market Rate.
          </h2>
          <p className="text-white/65 text-base font-light">
            Free, no obligation, one business day. If we are not the right fit for the role, we will tell you on the call rather than three weeks in.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <HubSpotForm className="grc-hubspot-form" />
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-5 border-t border-[#e8f4f8]">
            <span className="text-[#005f83]/40 text-xs">Prefer to talk?</span>
            <a href="tel:+97143139999" className="flex items-center gap-1.5 text-[#005f83]/60 text-xs font-semibold hover:text-[#005f83] transition-colors">
              <Phone className="w-3.5 h-3.5" /> +971 4 313 9999
            </a>
            <span className="text-[#005f83]/30 text-xs hidden sm:block">·</span>
            <a href="mailto:hello@tascoutsourcing.com" className="text-[#005f83]/60 text-xs font-semibold hover:text-[#005f83] transition-colors">
              hello@tascoutsourcing.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
