import { Check, Star } from "lucide-react";
import { Button } from "./ui/button";

export function PricingPackages() {
  const packages = [
    {
      name: "Essential",
      description: "Perfect for small to medium businesses with straightforward hiring needs",
      price: "Competitive rates",
      features: [
        "Standard recruitment process",
        "30-day replacement guarantee",
        "Basic reporting",
        "Email support",
        "Local market focus",
        "Standard turnaround time"
      ],
      popular: false
    },
    {
      name: "Professional",
      description: "Ideal for growing companies requiring specialized talent and enhanced service",
      price: "Premium value",
      features: [
        "Advanced screening process",
        "60-day replacement guarantee",
        "Detailed analytics & reporting",
        "Dedicated account manager",
        "GCC-wide market coverage",
        "Priority turnaround time",
        "Employer branding support",
        "Interview training"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      description: "Comprehensive solution for large organizations with complex hiring requirements",
      price: "Custom pricing",
      features: [
        "Full RPO service",
        "90-day replacement guarantee",
        "Real-time dashboard & metrics",
        "Dedicated recruitment team",
        "International market reach",
        "Express turnaround time",
        "Complete employer branding",
        "Leadership development",
        "Compliance management",
        "Strategic consulting"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-gray-900">
            Flexible Service Packages
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the package that best fits your hiring needs and budget. All packages include our core quality guarantee and local market expertise.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div key={index} className={`relative bg-gray-50 rounded-lg p-8 border ${pkg.popular ? 'border-teal-500 shadow-lg' : 'border-gray-200'}`}>
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-teal-500 text-white px-4 py-1 rounded-full text-sm flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl mb-2 text-gray-900">
                  {pkg.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {pkg.description}
                </p>
                <div className="text-lg text-teal-600">
                  {pkg.price}
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="w-5 h-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full py-3 rounded-lg ${
                  pkg.popular 
                    ? 'bg-teal-500 hover:bg-teal-600 text-white' 
                    : 'bg-white border border-teal-500 text-teal-600 hover:bg-teal-50'
                }`}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Need a custom solution? Let's discuss your specific requirements.
          </p>
          <Button variant="outline" className="border-teal-500 text-teal-600 hover:bg-teal-50 px-8 py-3 rounded-lg">
            Schedule Custom Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}