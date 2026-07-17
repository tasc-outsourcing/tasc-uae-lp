import { Target, Lightbulb, Users } from "lucide-react";
import whyChooseBackground from "figma:asset/9834ef1c4cdd2b2f5595cf4984832214d7773df6.png";

export function WhyChooseTASC() {
  const credentials = [
    "50+ recruiters across UAE and India",
    "Strong track record in fast, accurate hiring",
    "End-to-end onboarding and HR support",
    "24/7 ECARE helpline and WhatsApp assistant (AIDA)",
    "Dedicated contractor care and engagement",
    "100% labor law compliance",
    "Visa sponsorship on TASC quota",
    "Active hiring across 25+ industries"
  ];

  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${whyChooseBackground})`
        }}
      />
      
      {/* Blue Brand Overlay for Text Readability - Same as Hero */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--tasc-navy)]/90 via-[var(--tasc-navy)]/75 to-[var(--tasc-accent-blue)]/60"></div>
      
      {/* Additional Blue Tint Overlay */}
      <div className="absolute inset-0 bg-[var(--tasc-accent-blue)]/20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-[var(--tasc-accent-blue)]/20 to-[var(--tasc-brand-green)]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-[var(--tasc-brand-green)]/15 to-[var(--tasc-accent-blue)]/15 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-white">
            Why Businesses Across the UAE Choose TASC
          </h2>
          <p className="text-xl text-white/90 max-w-4xl mx-auto">
            TASC has been a trusted staffing partner in the UAE for over 15 years. With 6,500+ associates deployed across the GCC, we bring unmatched speed, scale, and service.
          </p>
        </div>
        
        <div className="mb-12">
          <div className="bg-white/95 backdrop-blur-sm tasc-shadow-lg rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl mb-6 text-[var(--tasc-navy)] text-center">
              What sets us apart:
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {credentials.map((credential, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-[var(--tasc-brand-green)] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-[var(--tasc-dark-gray)]">{credential}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Trust badge */}
        <div className="text-center">
          <div className="bg-white/95 backdrop-blur-sm tasc-shadow-lg rounded-xl p-8 inline-block border border-white/20">
            <p className="text-[var(--tasc-navy)] text-lg">
              <span className="font-semibold">"TASC consistently delivers quality talent ahead of schedule."</span>
            </p>
            <p className="text-[var(--tasc-dark-gray)] text-sm mt-2">
              — HR Director, Fortune 500 Company
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}