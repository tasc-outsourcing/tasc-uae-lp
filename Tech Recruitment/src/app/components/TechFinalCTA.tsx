import { ArrowRight, Shield, CheckCircle, Users, Star } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export function TechFinalCTA() {
  const trustMarkers = [
    { icon: Shield, text: "100% Confidential" },
    { icon: CheckCircle, text: "No Obligation" },
    { icon: Users, text: "Specialist Consultation" },
    { icon: Star, text: "Tailored Solutions" }
  ];

  return (
    <section className="py-20 px-6 rounded-3xl mx-4 md:mx-8 my-8 relative overflow-hidden" style={{ backgroundColor: "var(--tasc-navy-dark)" }}>
      {/* Subtle gradient glow */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-20 rounded-full blur-3xl" style={{ background: "var(--tasc-gradient)" }}></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 opacity-10 rounded-full blur-3xl" style={{ background: "var(--tasc-gradient)" }}></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Tell Us the Skill Set.<br />
            <span className="tasc-gradient-text-enhanced">We'll Bring the Specialist.</span>
          </h2>

          <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
            Whether you need one AI engineer or a full cloud migration squad, TASC and AIQU help you hire faster, smarter, and fully compliant across the UAE and KSA.
          </p>
        </div>

        {/* Trust Markers */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {trustMarkers.map((marker, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-white/10 backdrop-blur-sm text-white border-white/20 px-4 py-3 text-sm"
            >
              <marker.icon className="w-4 h-4 mr-2" />
              {marker.text}
            </Badge>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            className="text-white px-10 py-5 text-lg rounded-full transition-all tasc-hover-lift inline-flex items-center gap-2 shadow-lg font-medium border-0"
            style={{ background: "var(--tasc-gradient)" }}
            onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get Started Now
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
