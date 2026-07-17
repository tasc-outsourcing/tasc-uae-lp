import { Clock, TrendingUp, Shield, DollarSign } from "lucide-react";

export function WhyContractStaffing() {
  const benefits = [
    {
      icon: Clock,
      title: "Onboard skilled professionals quickly",
      color: "text-[var(--tasc-accent-blue)]"
    },
    {
      icon: TrendingUp,
      title: "Scale your workforce based on project needs",
      color: "text-[var(--tasc-brand-green)]"
    },
    {
      icon: Shield,
      title: "Avoid delays from visa or quota constraints",
      color: "text-[var(--tasc-navy)]"
    },
    {
      icon: DollarSign,
      title: "Reduce administrative and compliance burdens",
      color: "text-[var(--tasc-accent-blue)]"
    }
  ];

  return (
    <section className="py-16 px-6 bg-[var(--tasc-light-gray)]">

      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 text-[var(--tasc-navy)]">
            Why Choose Contract Staffing?
          </h2>
          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 tasc-shadow-lg border border-[var(--tasc-border-light)]">
            <p className="text-lg md:text-xl text-[var(--tasc-dark-gray)] leading-relaxed">
              Hiring permanent employees isn't always practical. Whether you're launching a new project, covering seasonal demand, or managing hiring restrictions, contract staffing gives you flexibility without long-term risk.
            </p>
          </div>
        </div>
        
        <div className="mb-8 text-center">
          <h3 className="text-2xl font-bold mb-8 text-[var(--tasc-navy)]">
            With TASC, you can:
          </h3>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 text-center group tasc-hover-lift tasc-shadow border border-[var(--tasc-border-light)]">
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--tasc-light-gray)] to-white rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:shadow-lg transition-all">
                <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
              </div>
              <h4 className="text-lg md:text-xl text-[var(--tasc-navy)] leading-tight">
                {benefit.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}