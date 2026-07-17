import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "How long does it take to onboard staff through TASC?",
      answer: "For most roles, we can onboard within 2–6 weeks. Our extensive talent pools and streamlined processes enable rapid deployment. For urgent projects, we can move even faster with our express service."
    },
    {
      question: "Is TASC compliant with local labor laws?",
      answer: "Yes, 100%. We handle all visas, payroll, and legal documentation in full compliance with UAE and GCC labor laws. Our compliance team stays updated on all regulatory changes to ensure your business remains protected."
    },
    {
      question: "Can you scale up or down based on our project needs?",
      answer: "Absolutely. Our flexible services are designed to adapt to your business demands — from 1 role to 1,000+. We can quickly scale teams up for major projects or scale down during quieter periods."
    },
    {
      question: "What happens after a candidate is placed?",
      answer: "We provide comprehensive post-placement support including payroll management, visa renewals, leave tracking, performance monitoring, and ongoing HR services. You get continuous support throughout the employment lifecycle."
    },
    {
      question: "Do you provide services across all GCC countries?",
      answer: "Yes, we operate across the UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, and Oman. Our regional expertise ensures consistent service quality and compliance across all GCC markets."
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-[var(--tasc-navy)]">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-[var(--tasc-dark-gray)]">
            Get answers to common questions about our services and processes.
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-[var(--tasc-light-gray)] rounded-xl overflow-hidden tasc-hover-lift">
              <button
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                <h3 className="text-lg text-[var(--tasc-navy)] pr-4">
                  {faq.question}
                </h3>
                <ChevronDown 
                  className={`w-5 h-5 text-[var(--tasc-accent-blue)] transition-transform ${
                    openFAQ === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openFAQ === index && (
                <div className="px-6 pb-6 border-t border-[var(--tasc-border-light)]">
                  <p className="text-[var(--tasc-dark-gray)] leading-relaxed pt-4">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}