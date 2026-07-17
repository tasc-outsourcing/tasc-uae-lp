import { Phone, Mail, MapPin, Clock, Shield, CheckCircle, Users, Star, ChevronDown } from "lucide-react";
import { HubSpotForm } from "./HubSpotForm";

export function TechContactSection() {
  const contactInfo = [
    { icon: Phone, label: "Phone", value: "+971 4 358 8500" },
    { icon: Mail, label: "Email", value: "info@tascoutsourcing.com" },
    { icon: MapPin, label: "Locations", value: "UAE: Dubai & Abu Dhabi  ·  KSA: Riyadh & Al Khobar" },
    { icon: Clock, label: "Response Time", value: "Within 24 hours" },
  ];

  return (
    <section id="contact-form" className="py-20 px-6" style={{ backgroundColor: "var(--tasc-navy-dark)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Get in <span className="tasc-gradient-text-enhanced">Touch</span>
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Ready to hire specialist tech talent? Let's discuss your requirements.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — contact info + promises */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            <div className="grid grid-cols-1 gap-4 mb-8">
              {contactInfo.map((info, i) => (
                <div key={i} className="group bg-white/10 rounded-xl p-5 border border-white/10 tasc-hover-lift hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/15 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="w-6 h-6 text-[var(--tasc-green)]" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">{info.label}</p>
                      <p className="text-white font-semibold">{info.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white/10 rounded-xl p-8 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6">Our Promise to You</h3>
              <div className="space-y-4">
                {[
                  { icon: Shield, title: "100% Confidential", sub: "Your hiring needs are secure" },
                  { icon: CheckCircle, title: "No Obligation", sub: "Free consultation, no strings attached" },
                  { icon: Users, title: "Specialist Consultation", sub: "Expert tech recruiters, not generalists" },
                  { icon: Star, title: "Tailored Solutions", sub: "Custom approach for your needs" },
                ].map(({ icon: Icon, title, sub }, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Icon className="w-5 h-5 text-[var(--tasc-green)] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-white">{title}</p>
                      <p className="text-sm text-white/60">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — form card matching reference */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <h3 className="text-xl font-bold text-[var(--tasc-navy)] mb-1">Get Your Free Consultation</h3>
            <p className="text-sm text-[var(--tasc-dark-gray)] mb-6">
              Tell us about your staffing needs and we'll get back to you within 24 hours with a tailored solution.
            </p>

            <HubSpotForm
              portalId="20309062"
              formId="052af855-0fe5-4a73-89a4-279a76f97319"
              region="na1"
              className="tasc-hubspot-form"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
