import { Clock, DollarSign, TrendingUp, Shield, Globe, Eye, UserCheck, Zap } from "lucide-react";

export function ContractStaffingBenefits() {
  const benefits = [
    {
      icon: Clock,
      title: "Speed",
      description: "Reduce hiring timelines with pre-screened talent",
      color: "text-[var(--tasc-accent-blue)]",
      bgGradient: "from-[var(--tasc-accent-blue)]/10 to-[var(--tasc-accent-blue)]/5"
    },
    {
      icon: DollarSign,
      title: "Cost Savings",
      description: "Cut overhead, HR effort, and onboarding time",
      color: "text-[var(--tasc-brand-green)]",
      bgGradient: "from-[var(--tasc-brand-green)]/10 to-[var(--tasc-brand-green)]/5"
    },
    {
      icon: TrendingUp,
      title: "Flexibility",
      description: "Scale your team up or down with ease",
      color: "text-[var(--tasc-navy)]",
      bgGradient: "from-[var(--tasc-navy)]/10 to-[var(--tasc-navy)]/5"
    },
    {
      icon: Shield,
      title: "Low Risk",
      description: "TASC handles compliance, payroll, and disputes",
      color: "text-[var(--tasc-accent-blue)]",
      bgGradient: "from-[var(--tasc-accent-blue)]/10 to-[var(--tasc-accent-blue)]/5"
    },
    {
      icon: Globe,
      title: "Visa Support",
      description: "No quota issues – we sponsor your talent",
      color: "text-[var(--tasc-brand-green)]",
      bgGradient: "from-[var(--tasc-brand-green)]/10 to-[var(--tasc-brand-green)]/5"
    },
    {
      icon: UserCheck,
      title: "Global Reach",
      description: "Hire locally or remotely from anywhere",
      color: "text-[var(--tasc-navy)]",
      bgGradient: "from-[var(--tasc-navy)]/10 to-[var(--tasc-navy)]/5"
    },
    {
      icon: Eye,
      title: "Try Before You Hire",
      description: "Evaluate fit before offering a permanent role",
      color: "text-[var(--tasc-accent-blue)]",
      bgGradient: "from-[var(--tasc-accent-blue)]/10 to-[var(--tasc-accent-blue)]/5"
    },
    {
      icon: Zap,
      title: "Quick Deployment",
      description: "Fast-track talent acquisition in 3-7 days",
      color: "text-[var(--tasc-brand-green)]",
      bgGradient: "from-[var(--tasc-brand-green)]/10 to-[var(--tasc-brand-green)]/5"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-white via-[var(--tasc-light-gray)]/30 to-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[var(--tasc-brand-green)] to-[var(--tasc-accent-blue)] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-[var(--tasc-accent-blue)] to-[var(--tasc-navy)] rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-[var(--tasc-brand-green)] to-[var(--tasc-bright-green)] text-white px-4 py-2 rounded-full text-sm font-medium">
              Why Choose Contract Staffing?
            </span>
          </div>
          <h2 className="text-4xl font-bold mb-4 text-[var(--tasc-navy)]">
            The Benefits of <span className="tasc-gradient-text-enhanced">Contract Staffing</span>
          </h2>
          <p className="text-lg md:text-xl text-[var(--tasc-dark-gray)] max-w-4xl mx-auto">
            Choosing contract staffing with TASC means more than filling a role. It's about building workforce agility.
          </p>
        </div>
        
        {/* Enhanced 4x2 Grid Layout with Staggered Animation */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className={`group bg-gradient-to-br ${benefit.bgGradient} backdrop-blur-sm rounded-2xl p-6 text-center tasc-hover-lift tasc-shadow border border-white/50 hover:border-white/80 transition-all duration-500 hover:scale-105 relative overflow-hidden`}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Hover Background Effect */}
              <div className="absolute inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              
              <div className="relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-br from-white to-[var(--tasc-light-gray)] rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 border border-white/50`}>
                  <benefit.icon className={`w-8 h-8 ${benefit.color} group-hover:scale-110 transition-transform duration-300`} />
                </div>
                <h3 className="text-lg mb-2 text-[var(--tasc-navy)] font-semibold group-hover:text-[var(--tasc-accent-blue)] transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-[var(--tasc-dark-gray)] text-base leading-relaxed group-hover:text-[var(--tasc-navy)] transition-colors duration-300">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call-to-Action Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[var(--tasc-navy)] to-[var(--tasc-accent-blue)] rounded-2xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Experience These Benefits?</h3>
            <p className="text-lg mb-6 text-white/90">
              Join hundreds of companies who've transformed their hiring with TASC's contract staffing solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[var(--tasc-brand-green)] hover:bg-[var(--tasc-bright-green)] text-white px-6 py-3 rounded-lg font-medium transition-all tasc-hover-lift">
                Get Started Today
              </button>
              <button className="border border-white/30 text-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium transition-all backdrop-blur-sm">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}