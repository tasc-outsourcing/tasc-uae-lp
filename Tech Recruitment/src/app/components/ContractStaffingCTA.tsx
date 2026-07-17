import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export function ContractStaffingCTA() {
  return (
    <section className="py-20 px-6 relative overflow-hidden bg-gradient-to-br from-[var(--tasc-navy)] via-[var(--tasc-accent-blue)] to-[var(--tasc-navy)]">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[var(--tasc-brand-green)]/20 to-[var(--tasc-bright-green)]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-[var(--tasc-accent-blue)]/20 to-[var(--tasc-brand-green)]/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[var(--tasc-brand-green)]/10 to-[var(--tasc-accent-blue)]/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
          <h2 className="text-4xl md:text-5xl mb-6 text-white">
            Ready to Build a <span className="tasc-gradient-text-enhanced">Smarter Workforce</span>?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Whether you need to hire one expert or 100 contractors, we're here to help.
          </p>
          
          <Button className="bg-[var(--tasc-brand-green)] hover:bg-[var(--tasc-bright-green)] text-white px-8 py-4 text-lg rounded-lg transition-all tasc-hover-lift inline-flex items-center gap-2 shadow-xl">
            Request a Free Consultation
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}