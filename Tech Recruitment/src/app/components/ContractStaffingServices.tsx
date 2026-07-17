import { Calendar, Zap, Globe, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export function ContractStaffingServices() {
  const [activeService, setActiveService] = useState<number | null>(null);

  const services = [
    {
      icon: Calendar,
      title: "Long-Term Contract Staffing",
      description: "Perfect for extended projects or roles requiring continuity without adding to your permanent headcount.",
      features: [
        "Save up to 30% in operating costs",
        "TASC handles payroll, HR, insurance, and compliance",
        "Employees receive full support throughout the assignment"
      ],
      color: "text-[var(--tasc-accent-blue)]",
      bgColor: "from-[var(--tasc-accent-blue)]/10 to-[var(--tasc-navy)]/10",
      buttonColor: "bg-[var(--tasc-accent-blue)]"
    },
    {
      icon: Zap,
      title: "Short-Term Contract Staffing",
      description: "Ideal for urgent requirements, temporary roles, or seasonal peaks.",
      features: [
        "Fast deployment of pre-vetted staff",
        "Task-specific or project-based hiring",
        "Scale up or down without disruption"
      ],
      color: "text-[var(--tasc-brand-green)]",
      bgColor: "from-[var(--tasc-brand-green)]/10 to-[var(--tasc-bright-green)]/10",
      buttonColor: "bg-[var(--tasc-brand-green)]"
    },
    {
      icon: Globe,
      title: "Remote 360 Staffing",
      description: "Access global talent without relocation or infrastructure costs.",
      features: [
        "Tap into talent across 68+ countries",
        "Hire for roles in tech, support, operations, and more",
        "Fully managed onboarding, payroll, and HR from TASC"
      ],
      color: "text-[var(--tasc-navy)]",
      bgColor: "from-[var(--tasc-navy)]/10 to-[var(--tasc-accent-blue)]/10",
      buttonColor: "bg-[var(--tasc-navy)]"
    }
  ];

  const toggleService = (index: number) => {
    setActiveService(activeService === index ? null : index);
  };

  const selectedService = activeService !== null ? services[activeService] : null;

  return (
    <section className="py-20 px-6 bg-[var(--tasc-light-gray)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-[var(--tasc-navy)]">
            Our Contract Staffing Services
          </h2>
          <p className="text-lg md:text-xl text-[var(--tasc-dark-gray)] max-w-3xl mx-auto">
            We offer flexible models that suit short-term, long-term, and remote workforce needs.
          </p>
        </div>
        
        {/* Service Selection Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => toggleService(index)}
              className={`group flex items-center px-6 py-4 rounded-2xl transition-all duration-300 tasc-hover-lift ${
                activeService === index
                  ? `${service.buttonColor} text-white tasc-shadow-lg`
                  : 'bg-white text-[var(--tasc-navy)] tasc-shadow border border-[var(--tasc-border-light)] hover:border-[var(--tasc-accent-blue)]'
              }`}
            >
              <service.icon className={`w-5 h-5 mr-3 ${
                activeService === index ? 'text-white' : service.color
              }`} />
              <span className="font-semibold mr-2">{service.title}</span>
              {activeService === index ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>
          ))}
        </div>

        {/* Expanded Service Content */}
        {selectedService && (
          <div className="max-w-4xl mx-auto">
            <div className={`bg-white tasc-shadow-lg rounded-2xl p-8 transition-all duration-500 border-l-4 ${selectedService.buttonColor.replace('bg-', 'border-')}`}>
              <div className="flex items-start mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${selectedService.bgColor} rounded-2xl flex items-center justify-center mr-6 flex-shrink-0`}>
                  <selectedService.icon className={`w-8 h-8 ${selectedService.color}`} />
                </div>
                <div>
                  <h3 className="text-2xl mb-3 text-[var(--tasc-navy)] font-bold">
                    {selectedService.title}
                  </h3>
                  <p className="text-[var(--tasc-dark-gray)] text-lg md:text-xl leading-relaxed">
                    {selectedService.description}
                  </p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {selectedService.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="bg-gradient-to-br from-[var(--tasc-light-gray)] to-white p-4 rounded-xl border border-[var(--tasc-border-light)]">
                    <div className="flex items-start">
                      <div className={`w-3 h-3 ${selectedService.color.replace('text-', 'bg-')} rounded-full mt-1.5 mr-3 flex-shrink-0`}></div>
                      <span className="text-[var(--tasc-dark-gray)] leading-relaxed">{feature}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* CTA when no service is selected */}
        {activeService === null && (
          <div className="text-center py-12">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-[var(--tasc-navy)] mb-4">
                Ready to Find Your Perfect Contract Staff?
              </h3>
              <p className="text-[var(--tasc-dark-gray)] mb-8 text-lg md:text-xl">
                Let's discuss your specific requirements and get you connected with pre-vetted talent in 3-7 days.
              </p>
              <button className="tasc-gradient text-white px-8 py-4 rounded-2xl text-lg font-semibold tasc-hover-lift tasc-shadow-lg transition-all duration-300 hover:scale-105">
                Get Started Today
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}