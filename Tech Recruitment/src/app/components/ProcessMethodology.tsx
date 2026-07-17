import { FileSearch, Users, CheckCircle, TrendingUp } from "lucide-react";

export function ProcessMethodology() {
  const steps = [
    {
      icon: FileSearch,
      title: "Discovery & Analysis",
      description: "We conduct a thorough analysis of your hiring needs, company culture, and specific requirements.",
      details: ["Stakeholder interviews", "Job analysis", "Market research", "Competency mapping"]
    },
    {
      icon: Users,
      title: "Sourcing & Screening",
      description: "Our bilingual teams leverage extensive networks and advanced tools to identify top talent.",
      details: ["Multi-channel sourcing", "Cultural fit assessment", "Technical evaluation", "Reference checks"]
    },
    {
      icon: CheckCircle,
      title: "Selection & Onboarding",
      description: "We manage the entire selection process and provide comprehensive onboarding support.",
      details: ["Interview coordination", "Offer negotiation", "Documentation", "Integration support"]
    },
    {
      icon: TrendingUp,
      title: "Performance & Follow-up",
      description: "Continuous monitoring and support to ensure successful placements and long-term retention.",
      details: ["Performance tracking", "Feedback collection", "Retention support", "Process optimization"]
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-gray-900">
            Our Proven Methodology
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A structured approach refined over 18+ years of successful placements across the GCC region.
          </p>
        </div>
        
        <div className="relative">
          {/* Process line */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-500 to-blue-500"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step number */}
                <div className="w-12 h-12 bg-teal-500 text-white rounded-full flex items-center justify-center mb-6 relative z-10 mx-auto lg:mx-0">
                  <span>{index + 1}</span>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                    <step.icon className="w-5 h-5 text-teal-600" />
                  </div>
                  <h3 className="text-lg mb-3 text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {step.description}
                  </p>
                  <ul className="space-y-1">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="text-xs text-gray-500 flex items-center">
                        <div className="w-1 h-1 bg-teal-500 rounded-full mr-2"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}