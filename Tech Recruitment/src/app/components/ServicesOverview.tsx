import { Users, Search, Building, Briefcase, Target, Globe } from "lucide-react";
import { Button } from "./ui/button";

export function ServicesOverview() {
  const services = [
    {
      icon: Users,
      title: "Recruitment Process Outsourcing (RPO)",
      description: "Complete end-to-end recruitment solution with dedicated teams, technology, and processes.",
      features: ["Dedicated recruitment teams", "Customized workflows", "Real-time reporting", "Scalable solutions"]
    },
    {
      icon: Search,
      title: "Executive Search",
      description: "Senior-level and specialized role recruitment with extensive market mapping and headhunting.",
      features: ["C-suite placements", "Market mapping", "Confidential searches", "Cultural fit assessment"]
    },
    {
      icon: Building,
      title: "Project-Based Recruitment",
      description: "Targeted recruitment campaigns for specific projects, expansions, or seasonal hiring needs.",
      features: ["Project management", "Bulk hiring", "Timeline guarantees", "Cost-effective pricing"]
    },
    {
      icon: Briefcase,
      title: "Retained Search",
      description: "Premium search service for critical roles with exclusive partnership and guaranteed outcomes.",
      features: ["Exclusive partnerships", "Deep market research", "Replacement guarantees", "Post-placement support"]
    },
    {
      icon: Target,
      title: "Talent Acquisition Consulting",
      description: "Strategic guidance to optimize your internal recruitment processes and employer branding.",
      features: ["Process optimization", "Employer branding", "Team training", "Technology consulting"]
    },
    {
      icon: Globe,
      title: "International Recruitment",
      description: "Cross-border talent acquisition with expertise in visa processing and relocation support.",
      features: ["Visa assistance", "Relocation support", "Cultural integration", "Compliance management"]
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-gray-900">
            Our Complete Service Portfolio
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive range of recruitment services designed to meet every hiring challenge, from volume recruitment to executive search across all industries in the GCC.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl mb-4 text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-lg text-lg">
            Discuss Your Requirements
          </Button>
        </div>
      </div>
    </section>
  );
}