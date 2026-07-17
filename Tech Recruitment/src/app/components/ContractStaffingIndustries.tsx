import { 
  Monitor, 
  ShoppingBag, 
  Truck, 
  Building2, 
  Heart, 
  Phone, 
  Car, 
  ShoppingCart
} from "lucide-react";
import { Badge } from "./ui/badge";
import heroBackground from "figma:asset/0806c142e590ab9f50fdbd35c4fd41ce622d7cfd.png";

export function ContractStaffingIndustries() {
  const industries = [
    { 
      name: "Technology and Engineering", 
      icon: Monitor, 
      color: "text-[var(--tasc-accent-blue)]"
    },
    { 
      name: "Retail and Consumer", 
      icon: ShoppingBag, 
      color: "text-[var(--tasc-brand-green)]"
    },
    { 
      name: "Logistics and Supply Chain", 
      icon: Truck, 
      color: "text-[var(--tasc-navy)]"
    },
    { 
      name: "Banking and Finance", 
      icon: Building2, 
      color: "text-[var(--tasc-accent-blue)]"
    },
    { 
      name: "Healthcare and Pharma", 
      icon: Heart, 
      color: "text-[var(--tasc-brand-green)]"
    },
    { 
      name: "Telecom and Energy", 
      icon: Phone, 
      color: "text-[var(--tasc-navy)]"
    },
    { 
      name: "Automotive and Aviation", 
      icon: Car, 
      color: "text-[var(--tasc-accent-blue)]"
    },
    { 
      name: "E-commerce and Digital", 
      icon: ShoppingCart, 
      color: "text-[var(--tasc-brand-green)]"
    }
  ];



  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBackground})`
        }}
      />
      
      {/* Enhanced Overlay with Subtle Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--tasc-navy)]/95 via-[var(--tasc-navy)]/90 to-[var(--tasc-accent-blue)]/85"></div>
      
      {/* Floating Design Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-[var(--tasc-brand-green)] to-[var(--tasc-bright-green)] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-tr from-[var(--tasc-accent-blue)] to-[var(--tasc-brand-green)] rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Badge className="bg-[var(--tasc-brand-green)]/20 text-[var(--tasc-brand-green)] border-[var(--tasc-brand-green)]/30 px-4 py-2">
              🏆 Award-Winning Industry Coverage
            </Badge>
          </div>
          
          <h2 className="text-4xl font-bold mb-4 text-white">
            Industries We <span className="tasc-gradient-text-enhanced">Support</span>
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8">
            We work with companies of all sizes, across all sectors, delivering specialized talent solutions.
          </p>


        </div>
        
        {/* Enhanced Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {industries.map((industry, index) => (
            <div 
              key={index} 
              className="text-center group cursor-pointer transform transition-all duration-300 hover:scale-105"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="relative">
                <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:bg-white group-hover:shadow-2xl transition-all tasc-hover-lift border border-white/20 group-hover:border-white/40">
                  <industry.icon className={`w-10 h-10 ${industry.color} group-hover:scale-110 transition-transform duration-300`} />
                </div>
              </div>
              
              <h3 className="text-base md:text-lg text-white group-hover:text-[var(--tasc-brand-green)] transition-colors leading-tight font-medium">
                {industry.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Don't See Your Industry? We've Got You Covered!
            </h3>
            <p className="text-white/90 mb-6">
              Our diverse talent network spans every sector. Let's discuss your specific industry needs.
            </p>
            <button className="bg-gradient-to-r from-[var(--tasc-brand-green)] to-[var(--tasc-bright-green)] hover:from-[var(--tasc-bright-green)] hover:to-[var(--tasc-brand-green)] text-white px-8 py-3 rounded-lg font-medium transition-all tasc-hover-lift shadow-xl">
              Discuss My Industry Needs
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}