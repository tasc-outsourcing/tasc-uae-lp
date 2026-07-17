import { Calendar, Users, Globe, Building2, Target } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function HowWeDeliver() {
  const engagementModels = [
    {
      icon: Calendar,
      title: "Contract Staffing",
      description: "Deploy specialists for fixed-term projects; TASC is the legal employer handling visa, payroll, and compliance.",
      color: "text-[var(--tasc-accent-blue)]",
      bgColor: "from-[var(--tasc-accent-blue)]/10 to-[var(--tasc-navy)]/10"
    },
    {
      icon: Users,
      title: "Permanent Recruitment",
      description: "Source and place core technology talent for long-term, business-critical roles.",
      color: "text-[var(--tasc-brand-green)]",
      bgColor: "from-[var(--tasc-brand-green)]/10 to-[var(--tasc-bright-green)]/10"
    },
    {
      icon: Globe,
      title: "Remote 360",
      description: "Access fully managed remote tech talent across 68+ countries, with one point of accountability.",
      color: "text-[var(--tasc-navy)]",
      bgColor: "from-[var(--tasc-navy)]/10 to-[var(--tasc-accent-blue)]/10"
    },
    {
      icon: Building2,
      title: "PEO / EOR",
      description: "Employ talent in the UAE and KSA without your own legal entity; TASC serves as Employer of Record.",
      color: "text-[var(--tasc-accent-blue)]",
      bgColor: "from-[var(--tasc-accent-blue)]/10 to-[var(--tasc-brand-green)]/10"
    }
  ];

  return (
    <section className="py-20 px-6 bg-[var(--tasc-light-gray)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-[var(--tasc-navy)]">
            One Talent Network, <span className="tasc-gradient-text-enhanced">Four Ways to Engage</span>
          </h2>
          <p className="text-lg md:text-xl text-[var(--tasc-dark-gray)] max-w-3xl mx-auto">
            Pick the model that fits the project — switch or combine as you scale.
          </p>
        </div>
        
        {/* Engagement Models Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {engagementModels.map((model, index) => (
            <Card 
              key={index} 
              className="group bg-white border-white tasc-hover-lift tasc-shadow hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden"
            >
              <CardContent className="p-8">
                <div className="flex items-start mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${model.bgColor} rounded-2xl flex items-center justify-center mr-6 flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <model.icon className={`w-8 h-8 ${model.color} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                  <div>
                    <h3 className="text-2xl mb-3 text-[var(--tasc-navy)] font-bold group-hover:text-[var(--tasc-accent-blue)] transition-colors duration-300">
                      {model.title}
                    </h3>
                    <p className="text-[var(--tasc-dark-gray)] text-lg leading-relaxed group-hover:text-[var(--tasc-navy)] transition-colors duration-300">
                      {model.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Service Note */}
        <div className="text-center">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-[var(--tasc-navy)] via-[var(--tasc-accent-blue)] to-[var(--tasc-brand-green)] rounded-2xl p-8 text-white">
            <div className="flex items-center justify-center mb-4">
              <Target className="w-8 h-8 text-[var(--tasc-brand-green)] mr-3" />
              <h3 className="text-2xl font-bold">Specialist Tech Talent Sourcing & Headhunting</h3>
            </div>
            <p className="text-lg text-white/90 leading-relaxed">
              Plus specialist tech talent sourcing & headhunting for hard-to-fill and passive-candidate roles across every domain above.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
