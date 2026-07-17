import { Zap, Shield, DollarSign, Building2, Award, Users } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function TechWhyChooseUs() {
  const benefits = [
    {
      icon: Zap,
      title: "Mobilization in 48–72 Hours",
      description: "Skip the 3–6 month hiring cycle. Your fully compliant, GCC-aligned tech team is deployed in days.",
      color: "text-[var(--tasc-brand-green)]",
      bgColor: "from-[var(--tasc-brand-green)]/10 to-[var(--tasc-bright-green)]/10"
    },
    {
      icon: Shield,
      title: "Built-In Compliance From Day One",
      description: "Saudization, Emiratisation, NCA, NESA, and GDPR handled from day one, so projects don't stall on legalities.",
      color: "text-[var(--tasc-accent-blue)]",
      bgColor: "from-[var(--tasc-accent-blue)]/10 to-[var(--tasc-navy)]/10"
    },
    {
      icon: DollarSign,
      title: "Enterprise-Grade Outcomes at Mid-Market Costs",
      description: "The \"missing middle\" that delivers enterprise-grade results without enterprise-grade invoices.",
      color: "text-[var(--tasc-brand-green)]",
      bgColor: "from-[var(--tasc-brand-green)]/10 to-[var(--tasc-accent-blue)]/10"
    },
    {
      icon: Building2,
      title: "Deep Cross-Sector Expertise",
      description: "BFSI, government, telco, and healthcare talent that knows regulated industries and local delivery realities.",
      color: "text-[var(--tasc-navy)]",
      bgColor: "from-[var(--tasc-navy)]/10 to-[var(--tasc-accent-blue)]/10"
    },
    {
      icon: Award,
      title: "Proven Talent, Delivered End to End",
      description: "Vetted specialists managed against your KPIs, from visa to payroll and compliance.",
      color: "text-[var(--tasc-accent-blue)]",
      bgColor: "from-[var(--tasc-accent-blue)]/10 to-[var(--tasc-brand-green)]/10"
    },
    {
      icon: Users,
      title: "Specialist Tech Consultants",
      description: "Consultants who think beyond \"staffing\" and act as genuine project partners.",
      color: "text-[var(--tasc-brand-green)]",
      bgColor: "from-[var(--tasc-brand-green)]/10 to-[var(--tasc-bright-green)]/10"
    }
  ];

  return (
    <section className="py-20 px-6 bg-[var(--tasc-light-gray)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-[var(--tasc-navy)]">
            Why Choose <span className="tasc-gradient-text-enhanced">TASC</span>
          </h2>
          <p className="text-lg md:text-xl text-[var(--tasc-dark-gray)] max-w-3xl mx-auto">
            Specialist technology recruitment backed by enterprise infrastructure and compliance expertise.
          </p>
        </div>
        
        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="group bg-white border-white tasc-hover-lift tasc-shadow hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden"
            >
              <CardContent className="p-8">
                <div className={`w-14 h-14 bg-gradient-to-br ${benefit.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className={`w-7 h-7 ${benefit.color} group-hover:scale-110 transition-transform duration-300`} />
                </div>
                <h3 className="text-xl mb-3 text-[var(--tasc-navy)] font-bold group-hover:text-[var(--tasc-accent-blue)] transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-[var(--tasc-dark-gray)] leading-relaxed group-hover:text-[var(--tasc-navy)] transition-colors duration-300">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
