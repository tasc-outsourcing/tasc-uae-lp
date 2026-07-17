import { Search, Users, CheckCircle, UserPlus } from "lucide-react";

export function HiringProcess() {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Needs Assessment",
      description: "We understand your staffing goals, role requirements, and company culture.",
      color: "text-[var(--tasc-accent-blue)]",
      bgColor: "from-[var(--tasc-accent-blue)]/10 to-[var(--tasc-navy)]/10"
    },
    {
      number: "02",
      icon: Users,
      title: "Talent Sourcing",
      description: "Our recruiters tap into our database, global network, and headhunting channels.",
      color: "text-[var(--tasc-brand-green)]",
      bgColor: "from-[var(--tasc-brand-green)]/10 to-[var(--tasc-bright-green)]/10"
    },
    {
      number: "03",
      icon: CheckCircle,
      title: "Screening & Shortlisting",
      description: "Only the most qualified and best-fit candidates are presented to you.",
      color: "text-[var(--tasc-navy)]",
      bgColor: "from-[var(--tasc-navy)]/10 to-[var(--tasc-accent-blue)]/10"
    },
    {
      number: "04",
      icon: UserPlus,
      title: "Onboarding",
      description: "We manage contracts, documentation, payroll setup, and onboarding sessions.",
      color: "text-[var(--tasc-accent-blue)]",
      bgColor: "from-[var(--tasc-accent-blue)]/10 to-[var(--tasc-brand-green)]/10"
    }
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden bg-gradient-to-br from-[var(--tasc-light-gray)] via-[var(--tasc-accent-blue)]/5 to-[var(--tasc-brand-green)]/5">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-[var(--tasc-accent-blue)] to-[var(--tasc-brand-green)] rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-tl from-[var(--tasc-brand-green)] to-[var(--tasc-navy)] rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-[var(--tasc-navy)]">
            Our <span className="tasc-gradient-text-enhanced">Hiring Process</span>
          </h2>
          <p className="text-xl text-[var(--tasc-dark-gray)] max-w-3xl mx-auto">
            A simple, proven process to help you get the right people at the right time.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-[var(--tasc-brand-green)] to-[var(--tasc-accent-blue)] transform translate-x-4 -translate-y-1/2 z-0"></div>
              )}
              
              <div className="relative z-10 bg-white/90 backdrop-blur-sm tasc-shadow-lg rounded-2xl p-8 text-center tasc-hover-lift transition-all duration-300 border border-[var(--tasc-border-light)]">
                <div className="relative mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${step.bgColor} rounded-2xl flex items-center justify-center mx-auto border border-white/50`}>
                    <step.icon className={`w-8 h-8 ${step.color}`} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-[var(--tasc-brand-green)] to-[var(--tasc-bright-green)] rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white text-xs font-bold">{step.number}</span>
                  </div>
                </div>
                <h3 className="text-xl mb-4 text-[var(--tasc-navy)]">
                  {step.title}
                </h3>
                <p className="text-[var(--tasc-dark-gray)] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}