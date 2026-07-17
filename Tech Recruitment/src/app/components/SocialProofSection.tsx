import { Star, Quote, Award, TrendingUp, Users, Shield, Clock, FileCheck, Target } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

export function SocialProofSection() {
  const testimonials = [
    {
      quote: "The speed and quality of talent acquisition exceeded our expectations. Within 5 days, we had a team of 8 skilled professionals ready to start.",
      role: "HR Director",
      company: "Fortune 500 Technology Company",
      rating: 5,
      category: "Technology"
    },
    {
      quote: "TASC's compliance handling removed all our legal worries. We could focus on our project while they managed everything else seamlessly.",
      role: "Operations Manager", 
      company: "Leading Healthcare Provider",
      rating: 5,
      category: "Healthcare"
    },
    {
      quote: "The flexibility to scale our team during peak season was a game-changer. No long-term commitments, just results.",
      role: "Project Director",
      company: "Major Construction Firm",
      rating: 5,
      category: "Construction"
    }
  ];

  const metrics = [
    {
      icon: TrendingUp,
      value: "81.7 CNPS",
      label: "Client Rating",
      description: "Based on 500+ reviews"
    },
    {
      icon: FileCheck,
      value: "95%",
      label: "Invoice Accuracy",
      description: "Error-free billing"
    },
    {
      icon: Target,
      value: "6:3:1",
      label: "CV to Selection Ratio",
      description: "Quality candidate screening"
    },
    {
      icon: Shield,
      value: "100%",
      label: "Compliance Rate",
      description: "Zero legal issues"
    }
  ];

  const awards = [
    { title: "Sheikh Mohammed Bin Rashid Al Maktoum Business Excellence Award", org: "Dubai Government" },
    { title: "Best HR Supplier Award 2016 & Appreciation Award 2022", org: "Etisalat" },
    { title: "Dubai Quality Appreciation Award 2020", org: "Dubai Municipality" },
    { title: "Sheikh Khalifa Excellence Award 2016 & 2019", org: "Abu Dhabi Government" }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-[var(--tasc-light-gray)] via-white to-[var(--tasc-light-gray)] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-[var(--tasc-brand-green)] to-[var(--tasc-accent-blue)] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-tl from-[var(--tasc-navy)] to-[var(--tasc-brand-green)] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Badge className="bg-[var(--tasc-brand-green)]/10 text-[var(--tasc-brand-green)] border-[var(--tasc-brand-green)]/30 px-4 py-2">
              ⭐ Trusted by Industry Leaders
            </Badge>
          </div>
          
          <h2 className="text-4xl font-bold mb-4 text-[var(--tasc-navy)]">
            What Our <span className="tasc-gradient-text-enhanced">Clients Say</span>
          </h2>
          <p className="text-lg md:text-xl text-[var(--tasc-dark-gray)] max-w-3xl mx-auto">
            Don't just take our word for it. Here's what leading companies across the UAE say about our services.
          </p>
        </div>

        {/* Metrics Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className="text-center group bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 tasc-hover-lift tasc-shadow hover:bg-white transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[var(--tasc-accent-blue)]/10 to-[var(--tasc-brand-green)]/10 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <metric.icon className="w-6 h-6 text-[var(--tasc-accent-blue)] group-hover:text-[var(--tasc-brand-green)] transition-colors duration-300" />
              </div>
              <div className="text-3xl font-bold text-[var(--tasc-navy)] mb-1 group-hover:text-[var(--tasc-accent-blue)] transition-colors duration-300">
                {metric.value}
              </div>
              <div className="font-medium text-[var(--tasc-navy)] mb-1">
                {metric.label}
              </div>
              <div className="text-sm text-[var(--tasc-dark-gray)]">
                {metric.description}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group bg-white/90 backdrop-blur-sm border-white/50 tasc-hover-lift tasc-shadow hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden"
            >
              {/* Category Badge */}
              <div className="absolute top-4 right-4">
                <Badge variant="secondary" className="text-xs bg-[var(--tasc-brand-green)]/10 text-[var(--tasc-brand-green)] border-[var(--tasc-brand-green)]/30">
                  {testimonial.category}
                </Badge>
              </div>

              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[var(--tasc-brand-green)] text-[var(--tasc-brand-green)]" />
                  ))}
                </div>
                
                <Quote className="w-8 h-8 text-[var(--tasc-accent-blue)]/30 mb-4" />
                
                <p className="text-[var(--tasc-dark-gray)] mb-6 leading-relaxed group-hover:text-[var(--tasc-navy)] transition-colors duration-300">
                  "{testimonial.quote}"
                </p>
                
                <div className="border-t border-[var(--tasc-border-light)] pt-4">
                  <div className="font-medium text-[var(--tasc-navy)] group-hover:text-[var(--tasc-accent-blue)] transition-colors duration-300">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-[var(--tasc-dark-gray)]">
                    {testimonial.company}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Awards & Recognition */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-[var(--tasc-navy)] mb-8">Awards & Recognition</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {awards.map((award, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/50 tasc-hover-lift transition-all duration-300 hover:bg-white group"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[var(--tasc-brand-green)]/10 to-[var(--tasc-accent-blue)]/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-6 h-6 text-[var(--tasc-brand-green)] group-hover:text-[var(--tasc-accent-blue)] transition-colors duration-300" />
                </div>
                <div className="text-left flex-1">
                  <div className="font-medium text-[var(--tasc-navy)] text-sm leading-tight mb-2 group-hover:text-[var(--tasc-accent-blue)] transition-colors duration-300">
                    {award.title}
                  </div>
                  <div className="text-xs text-[var(--tasc-dark-gray)] font-medium">
                    {award.org}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[var(--tasc-navy)] to-[var(--tasc-accent-blue)] rounded-2xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Join Our Success Stories</h3>
            <p className="text-lg mb-6 text-white/90">
              Become one of the hundreds of satisfied clients who've transformed their workforce with TASC.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[var(--tasc-brand-green)] hover:bg-[var(--tasc-bright-green)] text-white px-8 py-3 rounded-lg font-medium transition-all tasc-hover-lift shadow-xl">
                Start Your Success Story
              </button>
              <button className="border border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-lg font-medium transition-all backdrop-blur-sm">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}