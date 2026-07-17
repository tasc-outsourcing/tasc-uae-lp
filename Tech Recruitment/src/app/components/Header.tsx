import { useState } from "react";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import tascLogo from "figma:asset/886916fdd686ecd0fcb776dfb076e74436e76add.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { 
      name: "Services", 
      href: "#services",
      submenu: [
        { name: "RPO Services", href: "#rpo" },
        { name: "Executive Search", href: "#executive" },
        { name: "Temporary Staffing", href: "#temporary" },
        { name: "Compliance", href: "#compliance" }
      ]
    },
    { 
      name: "Industries", 
      href: "#industries",
      submenu: [
        { name: "Aviation & MRO", href: "#aviation" },
        { name: "Healthcare & BFSI", href: "#healthcare" },
        { name: "Manufacturing", href: "#manufacturing" },
        { name: "Hospitality", href: "#hospitality" }
      ]
    },
    { name: "About", href: "#about" },
    { name: "Resources", href: "#resources" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-[var(--tasc-border-light)] tasc-shadow">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top contact bar */}
        <div className="hidden md:flex justify-end items-center py-3 text-sm border-b border-[var(--tasc-border-light)]">
          <div className="flex items-center gap-6">
            <a href="tel:+971-4-123-4567" className="flex items-center gap-2 hover:text-[var(--tasc-accent-blue)] transition-colors group">
              <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              +971 4 123 4567
            </a>
            <a href="mailto:info@tasc.ae" className="flex items-center gap-2 hover:text-[var(--tasc-accent-blue)] transition-colors group">
              <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
              info@tasc.ae
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
                  {item.submenu && (
                    <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
                  )}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--tasc-accent-blue)] to-[var(--tasc-brand-green)] transition-all duration-200 group-hover:w-full"></span>
                </a>
                
                {/* Submenu */}
                {item.submenu && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-[var(--tasc-border-light)] rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                    <div className="p-2">
                      {item.submenu.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-3 text-[var(--tasc-dark-gray)] hover:text-[var(--tasc-accent-blue)] hover:bg-[var(--tasc-light-gray)] rounded-lg transition-all duration-200"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
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
          <div className="lg:hidden py-6 border-t border-[var(--tasc-border-light)] bg-white/95 backdrop-blur-xl">
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <a
                    href={item.href}
                    className="block text-[var(--tasc-dark-gray)] hover:text-[var(--tasc-accent-blue)] transition-colors duration-200 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                  {item.submenu && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.submenu.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block text-sm text-[var(--tasc-dark-gray)]/80 hover:text-[var(--tasc-accent-blue)] transition-colors duration-200 py-1"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="flex flex-col gap-3 pt-6 border-t border-[var(--tasc-border-light)]">
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
  );
}