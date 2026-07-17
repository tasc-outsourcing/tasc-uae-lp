import { 
  Plane, 
  ShoppingBag, 
  Building2, 
  Shield, 
  Zap, 
  Utensils, 
  Heart, 
  Truck,
  ShoppingCart,
  Car,
  Headphones,
  Users,
  TreePine,
  Fuel,
  Factory,
  Clapperboard,
  ArrowRight,
  FileText,
  MessageSquare
} from "lucide-react";
import { Button } from "./ui/button";
import industriesBackground from "figma:asset/52d2b3c970ca6ce4beb3fae35ac115d2a6e895d4.png";

export function IndustriesSection() {
  const industries = [
    { name: "Aviation", icon: Plane, color: "text-blue-600" },
    { name: "Retail", icon: ShoppingBag, color: "text-green-600" },
    { name: "Banking & Finance", icon: Building2, color: "text-[var(--tasc-navy)]" },
    { name: "Government", icon: Shield, color: "text-red-600" },
    { name: "Energy", icon: Zap, color: "text-yellow-600" },
    { name: "Hospitality", icon: Utensils, color: "text-purple-600" },
    { name: "Healthcare", icon: Heart, color: "text-pink-600" },
    { name: "Logistics", icon: Truck, color: "text-orange-600" },
    { name: "E-Commerce", icon: ShoppingCart, color: "text-[var(--tasc-accent-blue)]" },
    { name: "Automotive", icon: Car, color: "text-gray-600" },
    { name: "Customer Care", icon: Headphones, color: "text-[var(--tasc-brand-green)]" },
    { name: "Management Consulting", icon: Users, color: "text-indigo-600" },
    { name: "Greenfield", icon: TreePine, color: "text-emerald-600" },
    { name: "Oil and Gas", icon: Fuel, color: "text-slate-700" },
    { name: "Manufacturing and Engineering", icon: Factory, color: "text-amber-600" },
    { name: "Media and Entertainment", icon: Clapperboard, color: "text-rose-600" }
  ];

  return (
    <section id="industries" className="relative py-20 px-6 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${industriesBackground})`
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
            Industries We Serve
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Specialized expertise across key sectors in the UAE and GCC markets with deep industry knowledge.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {industries.map((industry, index) => (
            <div key={index} className="text-center group cursor-pointer">
              <div className="w-16 h-16 bg-white/95 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:bg-white transition-all tasc-hover-lift border border-white/20">
                <industry.icon className={`w-8 h-8 ${industry.color}`} />
              </div>
              <h3 className="text-lg text-white group-hover:text-[var(--tasc-brand-green)] transition-colors">
                {industry.name}
              </h3>
            </div>
          ))}
        </div>
        
        {/* Bottom section */}
        <div className="mt-16 bg-white/95 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
          <h3 className="text-2xl mb-4 text-[var(--tasc-navy)]">
            Deep Industry Knowledge
          </h3>
          <p className="text-[var(--tasc-dark-gray)] max-w-3xl mx-auto leading-relaxed mb-8">
            Our specialized teams understand the unique challenges and requirements of each industry. We combine local market expertise with global best practices to deliver tailored workforce solutions that drive your business forward.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-[var(--tasc-accent-blue)] hover:bg-[var(--tasc-navy)] text-white px-8 py-3 rounded-lg transition-all tasc-hover-lift inline-flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Request a Proposal
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="outline" className="border-[var(--tasc-accent-blue)] text-[var(--tasc-accent-blue)] hover:bg-[var(--tasc-accent-blue)] hover:text-white px-8 py-3 rounded-lg transition-all tasc-hover-lift inline-flex items-center gap-2">
              <MessageSquare className="w-5 h-5" />
              Talk to a Consultant
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}