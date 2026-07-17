import { useState } from "react";
import { Button } from "./ui/button";
import { ArrowRight, Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { AnimatedCounter } from "./AnimatedCounter";
import heroBackground from "figma:asset/a2a319c97a8566fe2ed956892a10e1777000a752.png";
import tascLogo from "figma:asset/886916fdd686ecd0fcb776dfb076e74436e76add.png";

export function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { 
      name: "Services", 
      href: "#services"
    },
    { 
      name: "Industries", 
      href: "#industries"
    },
    { name: "About", href: "#about" },
    { name: "Resources", href: "#resources" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Main Background Image - Dubai Skyline with Desert */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBackground})`
        }}
      />
      
      {/* Blue Brand Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--tasc-navy)]/90 via-[var(--tasc-navy)]/75 to-[var(--tasc-accent-blue)]/60"></div>
      
      {/* Additional Blue Tint Overlay */}
      <div className="absolute inset-0 bg-[var(--tasc-accent-blue)]/20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-[var(--tasc-accent-blue)]/20 to-[var(--tasc-brand-green)]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-[var(--tasc-brand-green)]/15 to-[var(--tasc-accent-blue)]/15 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>
      
      {/* Header integrated into Hero */}
      <header className="relative z-50 bg-white/95 backdrop-blur-xl border-b border-white/20 tasc-shadow">
        <div className="max-w-7xl mx-auto px-6">
          {/* Top contact bar */}
          <div className="hidden md:flex justify-end items-center py-3 text-sm border-b border-white/20">
            <div className="flex items-center gap-6">
              <a href="tel:+971-4-358-8500" className="flex items-center gap-2 hover:text-[var(--tasc-accent-blue)] transition-colors group">
                <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                +971 4 358 8500
              </a>
              <a href="mailto:info@tascoutsourcing.com" className="flex items-center gap-2 hover:text-[var(--tasc-accent-blue)] transition-colors group">
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                info@tascoutsourcing.com
              </a>
            </div>
          </div>

          {/* Main navigation */}
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center group">
              <img 
                src={tascLogo} 
                alt="TASC Logo" 
                className="h-12 w-auto group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  <a
                    href={item.href}
                    className="flex items-center gap-1 text-[var(--tasc-dark-gray)] hover:text-[var(--tasc-accent-blue)] transition-colors duration-200 py-2 relative group"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--tasc-accent-blue)] to-[var(--tasc-brand-green)] transition-all duration-200 group-hover:w-full"></span>
                  </a>
                </div>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <Button 
                variant="outline" 
                className="border-[var(--tasc-accent-blue)] text-[var(--tasc-accent-blue)] hover:bg-[var(--tasc-accent-blue)] hover:text-white transition-all duration-300 rounded-xl"
              >
                Get Quote
              </Button>
              <Button 
                className="tasc-gradient text-white hover:opacity-90 transition-all duration-300 rounded-xl tasc-hover-lift"
              >
                Get Started
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-[var(--tasc-dark-gray)] hover:text-[var(--tasc-accent-blue)] transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-6 border-t border-white/20 bg-white/95 backdrop-blur-xl">
              <nav className="flex flex-col space-y-4">
                {navigationItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block text-[var(--tasc-dark-gray)] hover:text-[var(--tasc-accent-blue)] transition-colors duration-200 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="flex flex-col gap-3 pt-6 border-t border-white/20">
                  <Button 
                    variant="outline" 
                    className="border-[var(--tasc-accent-blue)] text-[var(--tasc-accent-blue)] hover:bg-[var(--tasc-accent-blue)] hover:text-white w-full rounded-xl"
                  >
                    Get Quote
                  </Button>
                  <Button 
                    className="tasc-gradient text-white hover:opacity-90 transition-opacity w-full rounded-xl"
                  >
                    Get Started
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
      
      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Main Headline */}
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl text-white leading-tight font-bold">
                  One Partner.
                </h1>
                <h1 className="text-5xl lg:text-7xl tasc-gradient-text-enhanced leading-tight font-bold relative">
                  Global Standards. Local Execution.
                </h1>
              </div>
              
              {/* Subheading */}
              <p className="text-xl lg:text-2xl text-white/95 leading-relaxed max-w-2xl">
                Empowering businesses with end-to-end staffing and HR solutions across the UAE and GCC region. From recruitment to compliance, we've got you covered.
              </p>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="tasc-gradient text-white px-8 py-6 text-lg rounded-2xl transition-all tasc-hover-lift inline-flex items-center gap-3 group">
                  Request a Proposal
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white hover:text-[var(--tasc-navy)] px-8 py-6 text-lg rounded-2xl transition-all bg-white/5 backdrop-blur-sm"
                >
                  Talk to a Consultant
                </Button>
              </div>
            </div>

            {/* Right - Clean Stats Cards with Hover Blue Lines - Updated with Animated Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-6 text-center tasc-hover-lift transition-all duration-300 group tasc-shadow-lg flex flex-col justify-center items-center min-h-[120px]">
                <div className="text-sm font-semibold text-[var(--tasc-dark-gray)] mb-2">Established in</div>
                <AnimatedCounter 
                  end={2007} 
                  duration={2500}
                  className="text-4xl font-black mb-3 text-[var(--tasc-navy)] group-hover:scale-110 transition-transform duration-300" 
                />
                <div className="h-1 bg-transparent group-hover:bg-[var(--tasc-accent-blue)] rounded-full transition-colors duration-300 w-full"></div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 text-center tasc-hover-lift transition-all duration-300 group tasc-shadow-lg flex flex-col justify-center items-center min-h-[120px]">
                <div className="text-sm font-semibold text-[var(--tasc-dark-gray)] mb-2">Associates</div>
                <AnimatedCounter 
                  end={6500} 
                  suffix="+"
                  duration={2800}
                  className="text-4xl font-black mb-3 text-[var(--tasc-navy)] group-hover:scale-110 transition-transform duration-300" 
                />
                <div className="h-1 bg-transparent group-hover:bg-[var(--tasc-accent-blue)] rounded-full transition-colors duration-300 w-full"></div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 text-center tasc-hover-lift transition-all duration-300 group tasc-shadow-lg flex flex-col justify-center items-center min-h-[120px]">
                <div className="text-sm font-semibold text-[var(--tasc-dark-gray)] mb-2">Customers</div>
                <AnimatedCounter 
                  end={520} 
                  suffix="+"
                  duration={2200}
                  className="text-4xl font-black mb-3 text-[var(--tasc-navy)] group-hover:scale-110 transition-transform duration-300" 
                />
                <div className="h-1 bg-transparent group-hover:bg-[var(--tasc-accent-blue)] rounded-full transition-colors duration-300 w-full"></div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 text-center tasc-hover-lift transition-all duration-300 group tasc-shadow-lg flex flex-col justify-center items-center min-h-[120px]">
                <div className="text-sm font-semibold text-[var(--tasc-dark-gray)] mb-2">Awards</div>
                <AnimatedCounter 
                  end={24} 
                  suffix="+"
                  duration={1800}
                  className="text-4xl font-black mb-3 text-[var(--tasc-navy)] group-hover:scale-110 transition-transform duration-300" 
                />
                <div className="h-1 bg-transparent group-hover:bg-[var(--tasc-accent-blue)] rounded-full transition-colors duration-300 w-full"></div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 text-center tasc-hover-lift transition-all duration-300 group tasc-shadow-lg flex flex-col justify-center items-center min-h-[120px]">
                <div className="text-sm font-semibold text-[var(--tasc-dark-gray)] mb-2">Nationalities</div>
                <AnimatedCounter 
                  end={78} 
                  suffix="+"
                  duration={2000}
                  className="text-4xl font-black mb-3 text-[var(--tasc-navy)] group-hover:scale-110 transition-transform duration-300" 
                />
                <div className="h-1 bg-transparent group-hover:bg-[var(--tasc-accent-blue)] rounded-full transition-colors duration-300 w-full"></div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 text-center tasc-hover-lift transition-all duration-300 group tasc-shadow-lg flex flex-col justify-center items-center min-h-[120px]">
                <div className="text-sm font-semibold text-[var(--tasc-dark-gray)] mb-2">Operating in</div>
                <div className="flex flex-col items-center">
                  <AnimatedCounter 
                    end={68} 
                    duration={2100}
                    className="text-3xl font-black mb-2 text-[var(--tasc-navy)] group-hover:scale-110 transition-transform duration-300" 
                  />
                  <div className="text-xs font-semibold text-[var(--tasc-dark-gray)] mb-3">Countries</div>
                </div>
                <div className="h-1 bg-transparent group-hover:bg-[var(--tasc-accent-blue)] rounded-full transition-colors duration-300 w-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-sm">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full animate-pulse mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}