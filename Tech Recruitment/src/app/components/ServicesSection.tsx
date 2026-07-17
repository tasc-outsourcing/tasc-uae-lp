import { ArrowRight, Users, Search, Clock, Flag, Building, CreditCard, FileText, Repeat } from "lucide-react";

export function ServicesSection() {
  const staffingServices = [
    {
      icon: Clock,
      title: "Contract Staffing",
      link: "Learn More"
    },
    {
      icon: Users,
      title: "Permanent Recruitment",
      link: "Learn More"
    },
    {
      icon: Search,
      title: "Temporary Staffing", 
      link: "Learn More"
    },
    {
      icon: Flag,
      title: "Emiratisation",
      link: "Learn More"
    }
  ];

  const hrServices = [
    {
      icon: Building,
      title: "PEO Services",
      link: "Learn More"
    },
    {
      icon: CreditCard,
      title: "Payroll & Compliance",
      link: "Learn More"
    },
    {
      icon: FileText,
      title: "PRO & Visa Services",
      link: "Learn More"
    },
    {
      icon: Repeat,
      title: "RPO Solutions",
      link: "Learn More"
    }
  ];

  return (
    <section id="services" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-[var(--tasc-navy)]">
            Our Services
          </h2>
          <p className="text-xl text-[var(--tasc-dark-gray)] max-w-3xl mx-auto">
            Comprehensive staffing and HR solutions designed to meet every business need across the GCC region.
          </p>
        </div>
        
        {/* Staffing Solutions */}
        <div className="mb-16">
          <h3 className="text-2xl mb-8 text-[var(--tasc-navy)] text-center">
            Staffing Solutions
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {staffingServices.map((service, index) => (
              <div key={index} className="bg-white tasc-shadow-lg rounded-xl p-8 h-full flex flex-col items-center justify-center tasc-hover-lift group cursor-pointer transition-all duration-300 hover:bg-[var(--tasc-light-gray)] border border-[var(--tasc-border-light)]">
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--tasc-accent-blue)]/10 to-[var(--tasc-brand-green)]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-[var(--tasc-accent-blue)] group-hover:text-[var(--tasc-brand-green)] transition-colors duration-300" />
                </div>
                <h4 className="text-xl mb-6 text-[var(--tasc-navy)] text-center leading-tight group-hover:tasc-gradient-text transition-all duration-300 font-bold">
                  {service.title}
                </h4>
                <div className="flex items-center text-[var(--tasc-accent-blue)] group-hover:text-[var(--tasc-brand-green)] transition-colors cursor-pointer mt-auto">
                  <span className="mr-2">{service.link}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* HR Outsourcing Solutions */}
        <div>
          <h3 className="text-2xl mb-8 text-[var(--tasc-navy)] text-center">
            HR Outsourcing Solutions
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hrServices.map((service, index) => (
              <div key={index} className="bg-white tasc-shadow-lg rounded-xl p-8 h-full flex flex-col items-center justify-center tasc-hover-lift group cursor-pointer transition-all duration-300 hover:bg-[var(--tasc-light-gray)] border border-[var(--tasc-border-light)]">
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--tasc-navy)]/10 to-[var(--tasc-brand-green)]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-[var(--tasc-navy)] group-hover:text-[var(--tasc-brand-green)] transition-colors duration-300" />
                </div>
                <h4 className="text-xl mb-6 text-[var(--tasc-navy)] text-center leading-tight group-hover:tasc-gradient-text transition-all duration-300 font-bold">
                  {service.title}
                </h4>
                <div className="flex items-center text-[var(--tasc-navy)] group-hover:text-[var(--tasc-brand-green)] transition-colors cursor-pointer mt-auto">
                  <span className="mr-2">{service.link}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}