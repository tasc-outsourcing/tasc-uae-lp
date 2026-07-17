import { Database, Globe, Heart, Shield } from "lucide-react";
import { AnimatedCounter } from "./AnimatedCounter";

export function StatsStrip() {
  const stats = [
    {
      icon: Database,
      number: 1.5,
      suffix: "M+",
      firstLine: "1.5M+",
      secondLine: "Proprietary Candidate Database",
      color: "text-[var(--tasc-accent-blue)]"
    },
    {
      icon: Globe,
      number: 0,
      suffix: "",
      firstLine: "Global",
      secondLine: "Recruitment Drives",
      color: "text-[var(--tasc-navy)]"
    },
    {
      icon: Shield,
      number: 100,
      suffix: "%",
      firstLine: "100%",
      secondLine: "Compliance Rate",
      color: "text-[var(--tasc-accent-blue)]"
    },
    {
      icon: Heart,
      number: 1.3,
      suffix: "M+",
      firstLine: "1.3M+",
      secondLine: "Social Media Followers",
      color: "text-[var(--tasc-navy)]"
    }
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white tasc-shadow rounded-xl p-6 text-center tasc-hover-lift transition-all duration-300 group">
              <div className={`w-12 h-12 ${stat.color} bg-gradient-to-br from-[var(--tasc-accent-blue)]/10 to-[var(--tasc-brand-green)]/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              
              {/* First Line - Numbers/Primary Text */}
              <div className="text-3xl mb-3 text-[var(--tasc-navy)] group-hover:scale-105 transition-transform duration-300">
                {stat.secondLine === "Recruitment Drives" ? (
                  <span>{stat.firstLine}</span>
                ) : (
                  <AnimatedCounter 
                    end={stat.number} 
                    suffix={stat.suffix}
                    duration={2000 + index * 200}
                    decimals={stat.number < 10 && stat.number > 0 ? 1 : 0}
                  />
                )}
              </div>
              
              {/* Second Line - Descriptive Text */}
              <div className="text-sm text-[var(--tasc-dark-gray)] leading-tight">
                {stat.secondLine}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}