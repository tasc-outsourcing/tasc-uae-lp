import { Button } from "./ui/button";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

export function CallToAction() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Blue Brand Background - Same as overlay system */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--tasc-navy)] via-[var(--tasc-navy)] to-[var(--tasc-accent-blue)]"></div>
      
      {/* Additional Blue Tint for consistency */}
      <div className="absolute inset-0 bg-[var(--tasc-accent-blue)]/20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-[var(--tasc-accent-blue)]/20 to-[var(--tasc-brand-green)]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-[var(--tasc-brand-green)]/15 to-[var(--tasc-accent-blue)]/15 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Contact Information */}
          <div className="text-white">
            <h2 className="text-4xl mb-6">
              Let's Build Your Workforce of the Future
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join 500+ clients who trust TASC for faster, smarter hiring. Ready to get started?
            </p>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mr-4 border border-white/30">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-lg">+971 4 358 8500</div>
                  <div className="text-white/70 text-sm">Call us directly</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mr-4 border border-white/30">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-lg">info@tascoutsourcing.com</div>
                  <div className="text-white/70 text-sm">Send us an email</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mr-4 border border-white/30">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-lg">Dubai, UAE | Riyadh, KSA | Bengaluru, India</div>
                  <div className="text-white/70 text-sm">Regional offices</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl text-center border border-white/20">
                <div className="text-2xl mb-1">18+</div>
                <div className="text-sm text-white/80">Years</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl text-center border border-white/20">
                <div className="text-2xl mb-1">500+</div>
                <div className="text-sm text-white/80">Clients</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl text-center border border-white/20">
                <div className="text-2xl mb-1">100K+</div>
                <div className="text-sm text-white/80">Visas Processed</div>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 tasc-shadow-lg border border-white/20">
            <h3 className="text-2xl mb-2 text-[var(--tasc-navy)]">Let's Talk</h3>
            <p className="text-[var(--tasc-dark-gray)] mb-6">Tell us about your hiring needs and we'll get back to you within 24 hours.</p>
            
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-3 rounded-lg border border-[var(--tasc-border-light)] focus:outline-none focus:ring-2 focus:ring-[var(--tasc-accent-blue)] focus:border-transparent"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 rounded-lg border border-[var(--tasc-border-light)] focus:outline-none focus:ring-2 focus:ring-[var(--tasc-accent-blue)] focus:border-transparent"
                />
              </div>
              
              <input
                type="email"
                placeholder="Work Email *"
                className="w-full px-4 py-3 rounded-lg border border-[var(--tasc-border-light)] focus:outline-none focus:ring-2 focus:ring-[var(--tasc-accent-blue)] focus:border-transparent"
                required
              />
              
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Company"
                  className="w-full px-4 py-3 rounded-lg border border-[var(--tasc-border-light)] focus:outline-none focus:ring-2 focus:ring-[var(--tasc-accent-blue)] focus:border-transparent"
                />
                <select className="w-full px-4 py-3 rounded-lg border border-[var(--tasc-border-light)] focus:outline-none focus:ring-2 focus:ring-[var(--tasc-accent-blue)] focus:border-transparent text-[var(--tasc-dark-gray)]">
                  <option value="">Select Country</option>
                  <option value="UAE">UAE</option>
                  <option value="KSA">Saudi Arabia</option>
                  <option value="Qatar">Qatar</option>
                  <option value="Kuwait">Kuwait</option>
                  <option value="Bahrain">Bahrain</option>
                  <option value="Oman">Oman</option>
                </select>
              </div>
              
              <textarea
                placeholder="Tell us about your hiring needs..."
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-[var(--tasc-border-light)] focus:outline-none focus:ring-2 focus:ring-[var(--tasc-accent-blue)] focus:border-transparent resize-none"
              ></textarea>
              
              <Button className="w-full bg-[var(--tasc-accent-blue)] hover:bg-[var(--tasc-navy)] text-white py-4 rounded-lg transition-all tasc-hover-lift inline-flex items-center justify-center gap-2">
                Send Message
                <ArrowRight className="w-5 h-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}