import { ArrowRight, Phone, Mail, MapPin, Clock, Star, Shield, CheckCircle, Users } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Badge } from "./ui/badge";

export function ContactFormSection() {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+971 4 358 8500",
      color: "text-[var(--tasc-accent-blue)]"
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@tascoutsourcing.com",
      color: "text-[var(--tasc-brand-green)]"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Dubai, UAE",
      color: "text-[var(--tasc-navy)]"
    },
    {
      icon: Clock,
      label: "Response Time",
      value: "Within 24 hours",
      color: "text-[var(--tasc-accent-blue)]"
    }
  ];

  const guarantees = [
    { icon: Shield, text: "100% Confidential" },
    { icon: CheckCircle, text: "No Obligation" },
    { icon: Users, text: "Expert Consultation" },
    { icon: Star, text: "Tailored Solutions" }
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden bg-gradient-to-br from-[var(--tasc-navy)] via-[var(--tasc-accent-blue)] to-[var(--tasc-navy)]">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[var(--tasc-brand-green)]/20 to-[var(--tasc-bright-green)]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-[var(--tasc-accent-blue)]/20 to-[var(--tasc-brand-green)]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[var(--tasc-brand-green)]/10 to-[var(--tasc-accent-blue)]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <Badge className="bg-[var(--tasc-brand-green)]/20 text-[var(--tasc-brand-green)] border-[var(--tasc-brand-green)]/30 px-4 py-2">
              🚀 Get Started in Minutes
            </Badge>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Enhanced Contact Information */}
          <div>
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Ready to Build Your <span className="tasc-gradient-text-enhanced">Dream Team</span>?
              </h2>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8">
                Get in touch with our contract staffing experts. Whether you need one specialist or an entire team, we're here to help you scale faster and smarter.
              </p>

              {/* Guarantees */}
              <div className="flex flex-wrap gap-3 mb-8">
                {guarantees.map((guarantee, index) => (
                  <div key={index} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                    <guarantee.icon className="w-4 h-4 text-[var(--tasc-brand-green)]" />
                    <span className="text-white text-sm">{guarantee.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Contact Information Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 tasc-hover-lift transition-all duration-300 hover:bg-white/15">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white/80 text-sm">{info.label}</p>
                      <p className="text-white font-semibold group-hover:text-[var(--tasc-brand-green)] transition-colors duration-300">{info.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Enhanced CTAs */}
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-[var(--tasc-brand-green)]/20 to-[var(--tasc-bright-green)]/20 backdrop-blur-sm rounded-xl p-6 border border-[var(--tasc-brand-green)]/30">
                <h3 className="text-xl text-white mb-2 flex items-center gap-2">
                  🚀 Quick Start Guarantee
                </h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  Need talent urgently? We can deploy pre-screened candidates within 3-7 business days, fully compliant and ready to work.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl text-white mb-2 flex items-center gap-2">
                  💼 What Happens Next?
                </h3>
                <div className="space-y-2 text-sm text-white/90">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[var(--tasc-brand-green)] rounded-full"></div>
                    <span>Free 30-minute consultation call</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[var(--tasc-brand-green)] rounded-full"></div>
                    <span>Customized staffing proposal</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[var(--tasc-brand-green)] rounded-full"></div>
                    <span>Candidate shortlist within 48 hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Enhanced Contact Form */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 tasc-shadow-lg border border-white/20 relative overflow-hidden">
            {/* Form Header */}
            <div className="mb-6 relative">
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-[var(--tasc-brand-green)]/10 to-[var(--tasc-accent-blue)]/10 rounded-full blur-xl"></div>
              <h3 className="text-2xl font-bold text-[var(--tasc-navy)] mb-2">
                Get Your Free Consultation
              </h3>
              <p className="text-[var(--tasc-dark-gray)]">
                Tell us about your staffing needs and we'll get back to you within 24 hours with a tailored solution.
              </p>
            </div>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="group">
                  <label className="block text-sm font-medium text-[var(--tasc-navy)] mb-2">
                    First Name *
                  </label>
                  <Input 
                    placeholder="John" 
                    className="w-full transition-all duration-300 group-hover:border-[var(--tasc-accent-blue)]/50 focus:border-[var(--tasc-accent-blue)] focus:ring-2 focus:ring-[var(--tasc-accent-blue)]/20"
                  />
                </div>
                <div className="group">
                  <label className="block text-sm font-medium text-[var(--tasc-navy)] mb-2">
                    Last Name *
                  </label>
                  <Input 
                    placeholder="Doe" 
                    className="w-full transition-all duration-300 group-hover:border-[var(--tasc-accent-blue)]/50 focus:border-[var(--tasc-accent-blue)] focus:ring-2 focus:ring-[var(--tasc-accent-blue)]/20"
                  />
                </div>
              </div>
              
              <div className="group">
                <label className="block text-sm font-medium text-[var(--tasc-navy)] mb-2">
                  Work Email *
                </label>
                <Input 
                  type="email" 
                  placeholder="john@company.com" 
                  className="w-full transition-all duration-300 group-hover:border-[var(--tasc-accent-blue)]/50 focus:border-[var(--tasc-accent-blue)] focus:ring-2 focus:ring-[var(--tasc-accent-blue)]/20"
                />
              </div>
              
              <div className="group">
                <label className="block text-sm font-medium text-[var(--tasc-navy)] mb-2">
                  Phone Number *
                </label>
                <Input 
                  type="tel" 
                  placeholder="+971 50 123 4567" 
                  className="w-full transition-all duration-300 group-hover:border-[var(--tasc-accent-blue)]/50 focus:border-[var(--tasc-accent-blue)] focus:ring-2 focus:ring-[var(--tasc-accent-blue)]/20"
                />
              </div>
              
              <div className="group">
                <label className="block text-sm font-medium text-[var(--tasc-navy)] mb-2">
                  Company Name *
                </label>
                <Input 
                  placeholder="Your Company Ltd." 
                  className="w-full transition-all duration-300 group-hover:border-[var(--tasc-accent-blue)]/50 focus:border-[var(--tasc-accent-blue)] focus:ring-2 focus:ring-[var(--tasc-accent-blue)]/20"
                />
              </div>
              
              <div className="group">
                <label className="block text-sm font-medium text-[var(--tasc-navy)] mb-2">
                  Staffing Type *
                </label>
                <Select>
                  <SelectTrigger className="w-full transition-all duration-300 group-hover:border-[var(--tasc-accent-blue)]/50">
                    <SelectValue placeholder="Select staffing type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="long-term">Long-Term Contract Staffing</SelectItem>
                    <SelectItem value="short-term">Short-Term Contract Staffing</SelectItem>
                    <SelectItem value="remote">Remote 360 Staffing</SelectItem>
                    <SelectItem value="mixed">Mixed Requirements</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="group">
                <label className="block text-sm font-medium text-[var(--tasc-navy)] mb-2">
                  Number of Positions
                </label>
                <Select>
                  <SelectTrigger className="w-full transition-all duration-300 group-hover:border-[var(--tasc-accent-blue)]/50">
                    <SelectValue placeholder="How many positions?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-5">1-5 positions</SelectItem>
                    <SelectItem value="6-15">6-15 positions</SelectItem>
                    <SelectItem value="16-50">16-50 positions</SelectItem>
                    <SelectItem value="50+">50+ positions</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="group">
                <label className="block text-sm font-medium text-[var(--tasc-navy)] mb-2">
                  Project Details
                </label>
                <Textarea 
                  placeholder="Tell us about your staffing requirements, timeline, skills needed, and any other important details..."
                  className="w-full h-24 resize-none transition-all duration-300 group-hover:border-[var(--tasc-accent-blue)]/50 focus:border-[var(--tasc-accent-blue)] focus:ring-2 focus:ring-[var(--tasc-accent-blue)]/20"
                />
              </div>
              
              <Button className="w-full bg-gradient-to-r from-[var(--tasc-brand-green)] to-[var(--tasc-bright-green)] hover:from-[var(--tasc-bright-green)] hover:to-[var(--tasc-brand-green)] text-white py-4 text-lg rounded-lg transition-all tasc-hover-lift inline-flex items-center justify-center gap-2 shadow-xl font-medium">
                Submit Request & Get Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Button>
              
              <div className="bg-[var(--tasc-light-gray)]/50 rounded-lg p-4 text-center">
                <p className="text-xs text-[var(--tasc-dark-gray)]">
                  🔒 Your information is 100% secure and confidential.<br/>
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}