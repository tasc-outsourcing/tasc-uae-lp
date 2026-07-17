import { Clock, TrendingUp, Shield, DollarSign, Globe, Users, CheckCircle, Zap } from "lucide-react";

export function WithTASC() {
  const capabilities = [
    {
      icon: Clock,
      title: "Deploy talent in 3-7 days",
      description: "Our pre-screened candidate database ensures rapid deployment",
      color: "text-[var(--tasc-accent-blue)]"
    },
    {
      icon: TrendingUp,
      title: "Scale teams up or down instantly",
      description: "Flexible workforce management based on your project needs",
      color: "text-[var(--tasc-brand-green)]"
    },
    {
      icon: Shield,
      title: "Bypass visa quota restrictions",
      description: "All staff sponsored under TASC's established quota system",
      color: "text-[var(--tasc-navy)]"
    },
    {
      icon: DollarSign,
      title: "Reduce operational costs by 30%",
      description: "Eliminate recruitment, HR, and administrative overhead",
      color: "text-[var(--tasc-accent-blue)]"
    },
    {
      icon: Globe,
      title: "Access global talent pool",
      description: "1.5M+ candidates across 68+ countries at your fingertips",
      color: "text-[var(--tasc-brand-green)]"
    },
    {
      icon: Users,
      title: "Leverage 15+ years UAE expertise",
      description: "Proven track record with 6,500+ associates deployed",
      color: "text-[var(--tasc-navy)]"
    },
    {
      icon: CheckCircle,
      title: "Ensure 100% compliance",
      description: "Full labor law adherence and regulatory management",
      color: "text-[var(--tasc-accent-blue)]"
    },
    {
      icon: Zap,
      title: "Get 24/7 dedicated support",
      description: "AIDA assistance ensures seamless operations",
      color: "text-[var(--tasc-brand-green)]"
    }
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden bg-gradient-to-br from-[var(--tasc-navy)]/5 via-white to-[var(--tasc-brand-green)]/5">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-[var(--tasc-accent-blue)]/10 to-[var(--tasc-brand-green)]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-[var(--tasc-brand-green)]/10 to-[var(--tasc-navy)]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[var(--tasc-accent-blue)]/5 to-[var(--tasc-brand-green)]/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-[var(--tasc-navy)]">
            With <span className="tasc-gradient-text-enhanced">TASC</span>, You Can
          </h2>
          <p className="text-xl text-[var(--tasc-dark-gray)] max-w-4xl mx-auto">
            Transform your hiring strategy with our comprehensive contract staffing solutions. 
            From rapid deployment to full compliance management, we've got you covered.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((capability, index) => (
            <div key={index} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 group tasc-hover-lift tasc-shadow border border-[var(--tasc-border-light)]">
              <div className="w-14 h-14 bg-gradient-to-br from-[var(--tasc-light-gray)] to-white rounded-xl flex items-center justify-center mb-4 group-hover:shadow-lg transition-all">
                <capability.icon className={`w-7 h-7 ${capability.color}`} />
              </div>
              <h3 className="text-lg mb-3 text-[var(--tasc-navy)] font-semibold leading-tight">
                {capability.title}
              </h3>
              <p className="text-[var(--tasc-dark-gray)] text-sm leading-relaxed">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}