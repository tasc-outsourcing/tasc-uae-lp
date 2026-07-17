import { ImageWithFallback } from "./figma/ImageWithFallback";

export function SuccessMetrics() {
  const metrics = [
    {
      value: "85%",
      label: "Average Success Rate",
      description: "of all placements exceed 12-month retention"
    },
    {
      value: "45",
      label: "Average Days to Fill",
      description: "compared to industry average of 70+ days"
    },
    {
      value: "95%",
      label: "Client Satisfaction",
      description: "based on annual client surveys"
    },
    {
      value: "3.2X",
      label: "Faster Hiring",
      description: "than traditional recruitment methods"
    }
  ];

  const testimonials = [
    {
      quote: "TASC transformed our hiring process completely. We went from struggling to fill roles for months to having qualified candidates within weeks.",
      author: "Sarah Al-Rashid",
      position: "HR Director",
      company: "Major Retail Chain",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
    },
    {
      quote: "Their understanding of Saudization requirements and local market dynamics is unmatched. They've been instrumental in our expansion across the GCC.",
      author: "Mohammed Hassan",
      position: "CEO",
      company: "Technology Startup",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      quote: "The quality of candidates TASC provides is exceptional. Their screening process ensures we only interview the most suitable profiles.",
      author: "Fatima Al-Zahra",
      position: "Talent Acquisition Manager",
      company: "Financial Services",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Success Metrics */}
        <div className="text-center mb-20">
          <h2 className="text-4xl mb-4 text-gray-900">
            Proven Results That Speak for Themselves
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            Our data-driven approach consistently delivers exceptional outcomes for our clients across all service levels.
          </p>
          
          <div className="grid md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="text-3xl mb-2 text-teal-600">
                  {metric.value}
                </div>
                <div className="text-lg mb-2 text-gray-900">
                  {metric.label}
                </div>
                <div className="text-sm text-gray-600">
                  {metric.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <h3 className="text-3xl mb-4 text-gray-900">
            What Our Clients Say
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what leading companies across the GCC say about working with TASC.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center">
                <ImageWithFallback
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="text-gray-900">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.position}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}