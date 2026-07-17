import { Cpu, Shield, Database, Code, Cloud, TrendingUp, Server, Brain, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export function TechSpecializations() {
  const [activeSpec, setActiveSpec] = useState<number | null>(null);

  const specializations = [
    {
      icon: Cpu,
      title: "Industrial Automation",
      description: "Powering smart manufacturing, Industry 4.0, and OT modernization across the region's giga-projects and industrial base.",
      roles: "PLC/SCADA engineers, control systems engineers, automation architects, robotics & mechatronics engineers, instrumentation engineers, OT security specialists.",
      color: "text-[var(--tasc-accent-blue)]",
      bgColor: "from-[var(--tasc-accent-blue)]/10 to-[var(--tasc-navy)]/10",
      buttonColor: "bg-[var(--tasc-accent-blue)]"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Protecting critical infrastructure and enterprise environments, with talent fluent in the GCC's regulatory landscape (NCA, NESA).",
      roles: "SOC analysts, security architects, penetration testers, GRC & compliance specialists, IAM engineers, cloud security engineers, CISO / security leadership.",
      color: "text-[var(--tasc-brand-green)]",
      bgColor: "from-[var(--tasc-brand-green)]/10 to-[var(--tasc-bright-green)]/10",
      buttonColor: "bg-[var(--tasc-brand-green)]"
    },
    {
      icon: Database,
      title: "ERP",
      description: "End-to-end ERP talent for complex transformation programmes across SAP, Oracle, and Microsoft Dynamics.",
      roles: "Functional consultants, technical consultants (ABAP), solution architects, implementation & rollout leads, ERP project managers.",
      color: "text-[var(--tasc-navy)]",
      bgColor: "from-[var(--tasc-navy)]/10 to-[var(--tasc-accent-blue)]/10",
      buttonColor: "bg-[var(--tasc-navy)]"
    },
    {
      icon: Code,
      title: "Software Engineering",
      description: "Product and platform engineering talent that ships — from individual specialists to full delivery squads.",
      roles: "Full-stack / backend / frontend engineers, mobile developers, DevOps engineers, QA & test automation engineers, engineering & tech leads.",
      color: "text-[var(--tasc-accent-blue)]",
      bgColor: "from-[var(--tasc-accent-blue)]/10 to-[var(--tasc-brand-green)]/10",
      buttonColor: "bg-[var(--tasc-accent-blue)]"
    },
    {
      icon: Cloud,
      title: "Cloud & Infrastructure",
      description: "Talent to migrate, modernize, and run resilient cloud and infrastructure across AWS, Azure, and GCP.",
      roles: "Cloud architects, cloud & platform engineers, site reliability engineers (SRE), network engineers, systems administrators, migration specialists.",
      color: "text-[var(--tasc-brand-green)]",
      bgColor: "from-[var(--tasc-brand-green)]/10 to-[var(--tasc-accent-blue)]/10",
      buttonColor: "bg-[var(--tasc-brand-green)]"
    },
    {
      icon: TrendingUp,
      title: "Digital Transformation",
      description: "The people who lead change — connecting strategy, delivery, and adoption across enterprise programmes.",
      roles: "Programme & project managers, product owners, agile coaches, business analysts, change & adoption managers, transformation consultants.",
      color: "text-[var(--tasc-navy)]",
      bgColor: "from-[var(--tasc-navy)]/10 to-[var(--tasc-bright-green)]/10",
      buttonColor: "bg-[var(--tasc-navy)]"
    },
    {
      icon: Server,
      title: "IT Services & Data Engineering",
      description: "Keeping the lights on and turning data into advantage — from service delivery to modern data platforms.",
      roles: "IT support & service desk, service delivery managers, data engineers, ETL developers, data architects, BI & analytics specialists, database administrators.",
      color: "text-[var(--tasc-accent-blue)]",
      bgColor: "from-[var(--tasc-accent-blue)]/10 to-[var(--tasc-navy)]/10",
      buttonColor: "bg-[var(--tasc-accent-blue)]"
    },
    {
      icon: Brain,
      title: "Artificial Intelligence",
      description: "Talent to build and operationalize AI — from data science foundations to production-grade GenAI.",
      roles: "ML engineers, data scientists, AI / LLM engineers, MLOps engineers, computer vision & NLP specialists, AI product leads.",
      color: "text-[var(--tasc-brand-green)]",
      bgColor: "from-[var(--tasc-brand-green)]/10 to-[var(--tasc-bright-green)]/10",
      buttonColor: "bg-[var(--tasc-brand-green)]"
    }
  ];

  const toggleSpec = (index: number) => {
    setActiveSpec(activeSpec === index ? null : index);
  };

  const selectedSpec = activeSpec !== null ? specializations[activeSpec] : null;

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-[var(--tasc-navy)]">
            We Recruit <span className="tasc-gradient-text-enhanced">Deep, Not Wide</span>
          </h2>
          <p className="text-lg md:text-xl text-[var(--tasc-dark-gray)] max-w-4xl mx-auto">
            Generalist agencies send you CVs. We send you specialists — vetted by recruiters who understand the technology and the regulated realities of delivering it in the GCC.
          </p>
        </div>
        
        {/* Specialization Selection Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {specializations.map((spec, index) => (
            <button
              key={index}
              onClick={() => toggleSpec(index)}
              className={`group flex flex-col items-center px-4 py-6 rounded-2xl transition-all duration-300 tasc-hover-lift ${
                activeSpec === index
                  ? `${spec.buttonColor} text-white tasc-shadow-lg`
                  : 'bg-[var(--tasc-light-gray)] text-[var(--tasc-navy)] hover:bg-white border border-[var(--tasc-border-light)]'
              }`}
            >
              <spec.icon className={`w-8 h-8 mb-3 ${
                activeSpec === index ? 'text-white' : spec.color
              }`} />
              <span className="font-semibold text-center text-sm mb-2">{spec.title}</span>
              {activeSpec === index ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>
          ))}
        </div>

        {/* Expanded Specialization Content */}
        {selectedSpec && (
          <div className="max-w-5xl mx-auto mb-12">
            <div className={`bg-white tasc-shadow-lg rounded-2xl p-8 transition-all duration-500 border-l-4 ${selectedSpec.buttonColor.replace('bg-', 'border-')}`}>
              <div className="flex items-start mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${selectedSpec.bgColor} rounded-2xl flex items-center justify-center mr-6 flex-shrink-0`}>
                  <selectedSpec.icon className={`w-8 h-8 ${selectedSpec.color}`} />
                </div>
                <div>
                  <h3 className="text-2xl mb-3 text-[var(--tasc-navy)] font-bold">
                    {selectedSpec.title}
                  </h3>
                  <p className="text-[var(--tasc-dark-gray)] text-lg md:text-xl leading-relaxed mb-6">
                    {selectedSpec.description}
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-[var(--tasc-light-gray)] to-white p-6 rounded-xl border border-[var(--tasc-border-light)]">
                <h4 className="text-sm font-bold text-[var(--tasc-navy)] mb-4">Roles we place:</h4>
                <ul className="space-y-2">
                  {selectedSpec.roles.split(", ").map((role, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${selectedSpec.buttonColor}`}></span>
                      <span className="text-[var(--tasc-navy)] text-sm font-medium">{role.replace(/\.$/, "")}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Closing CTA */}
        <div className="text-center py-8">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-[var(--tasc-light-gray)] to-white p-8 rounded-2xl border border-[var(--tasc-border-light)]">
            <p className="text-lg md:text-xl text-[var(--tasc-dark-gray)] mb-6 leading-relaxed">
              <span className="font-semibold text-[var(--tasc-navy)]">Don't see your exact stack?</span> Our specialist recruiters cover niche and emerging technologies across every domain — tell us what you need.
            </p>
            <button
              className="tasc-gradient text-white px-8 py-4 rounded-2xl text-lg font-semibold tasc-hover-lift tasc-shadow-lg transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
            >
              Tell Us What You Need
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
