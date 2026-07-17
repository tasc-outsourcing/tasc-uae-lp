import { ArrowRight, Shield, Users, CheckCircle, Headphones, Star, Award } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import heroBackground from "figma:asset/0806c142e590ab9f50fdbd35c4fd41ce622d7cfd.png";

export function ContractStaffingHero() {
  const stats = [
    {
      icon: Shield,
      label: "Visa Sponsorship",
      description: "Full visa support",
      color: "text-[var(--tasc-brand-green)]"
    },
    {
      icon: Users,
      label: "50+ Recruiters",
      description: "Expert talent team",
      color: "text-[var(--tasc-accent-blue)]"
    },
    {
      icon: CheckCircle,
      label: "100% Labor Law",
      description: "Compliance guaranteed",
      color: "text-[var(--tasc-brand-green)]"
    },
    {
      icon: Headphones,
      label: "24/7 Assistance",
      description: "AIDA support",
      color: "text-[var(--tasc-accent-blue)]"
    }
  ];

  const trustSignals = [
    { icon: Award, text: "ISO 9001 Certified" },
    { icon: Star, text: "5-Star Rated Service" }
  ];

  return (
    <section className="relative py-24 flex items-center justify-center px-6 overflow-hidden min-h-[90vh]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBackground})`
        }}
      />
      
      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--tasc-navy)]/95 via-[var(--tasc-navy)]/80 to-[var(--tasc-accent-blue)]/70"></div>
      
      {/* Floating Elements for Visual Interest */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-[var(--tasc-brand-green)] to-[var(--tasc-bright-green)] rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 bg-gradient-to-br from-[var(--tasc-accent-blue)] to-[var(--tasc-brand-green)] rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/30 rounded-full blur-lg animate-bounce delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Trust Signals */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {trustSignals.map((signal, index) => (
            <Badge key={index} variant="secondary" className="bg-white/10 backdrop-blur-sm text-white border-white/20 px-4 py-2 text-sm">
              <signal.icon className="w-4 h-4 mr-2" />
              {signal.text}
            </Badge>
          ))}
        </div>

        {/* Main Hero Content */}
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="inline-block bg-gradient-to-r from-[var(--tasc-brand-green)] to-[var(--tasc-bright-green)] text-white px-6 py-2 rounded-full text-sm font-medium mb-6 animate-bounce">
              🚀 Trusted by 500+ Companies Across UAE
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
            Hire <span className="relative">
              <span className="tasc-gradient-text-enhanced">Contract Staff</span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[var(--tasc-brand-green)] to-[var(--tasc-bright-green)] rounded-full"></div>
            </span> in UAE,<br />
            Faster and Smarter
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
            Flexible, compliant, and cost-effective staffing solutions trusted by Fortune 500 companies across the GCC.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-gradient-to-r from-[var(--tasc-brand-green)] to-[var(--tasc-bright-green)] hover:from-[var(--tasc-bright-green)] hover:to-[var(--tasc-brand-green)] text-white px-8 py-4 text-lg rounded-lg transition-all tasc-hover-lift inline-flex items-center gap-2 shadow-xl">
              Request a Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Button>
            
            <Button variant="outline" className="border-2 border-white bg-white/10 text-white hover:bg-white hover:text-[var(--tasc-navy)] px-8 py-4 text-lg rounded-lg backdrop-blur-sm tasc-hover-lift transition-all duration-300 shadow-lg hover:shadow-xl font-medium">
              View Our Services
            </Button>
          </div>
        </div>
        
        {/* Enhanced Stats Tiles */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="group bg-white/95 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 tasc-hover-lift tasc-shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-white"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[var(--tasc-light-gray)] to-white rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <stat.icon className={`w-6 h-6 ${stat.color} group-hover:scale-110 transition-transform duration-300`} />
              </div>
              <h3 className="text-lg text-[var(--tasc-navy)] mb-1 font-semibold group-hover:text-[var(--tasc-accent-blue)] transition-colors duration-300">
                {stat.label}
              </h3>
              <p className="text-[var(--tasc-dark-gray)] text-sm group-hover:text-[var(--tasc-navy)] transition-colors duration-300">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Trust Elements */}
        <div className="mt-12 text-center">
          <p className="text-white/70 text-sm mb-4">Trusted across industries:</p>
          <div className="flex flex-wrap justify-center gap-8 text-white/60 text-sm">
            <span className="hover:text-white transition-colors cursor-default">Healthcare</span>
            <span className="hover:text-white transition-colors cursor-default">Construction</span>
            <span className="hover:text-white transition-colors cursor-default">Technology</span>
            <span className="hover:text-white transition-colors cursor-default">Finance</span>
            <span className="hover:text-white transition-colors cursor-default">Hospitality</span>
          </div>
        </div>
      </div>
    </section>
  );
}