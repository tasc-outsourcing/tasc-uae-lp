import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function MidPageCTA() {
  return (
    <section 
      className="relative py-20 px-6 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=1200&h=800&fit=crop')"
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl mb-4 text-white">
          Need staffing support today?
        </h2>
        <p className="text-xl mb-8 text-white/90">
          Let's help you find the right people — fast.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
          <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl mb-2 text-[#005f83]">24hrs</div>
            <div className="text-sm text-gray-600">Response Time</div>
          </div>
          <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl mb-2 text-[#005f83]">2-4wks</div>
            <div className="text-sm text-gray-600">Onboarding</div>
          </div>
        </div>
        
        <Button className="bg-[#43DA37] hover:bg-[#43DA37]/90 text-white px-8 py-4 rounded-xl text-lg inline-flex items-center gap-2 shadow-lg">
          Talk to a Consultant
          <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
    </section>
  );
}