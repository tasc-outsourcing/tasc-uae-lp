import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

export function ContractStaffingFAQ() {
  const faqs = [
    {
      question: "Do you sponsor visas?",
      answer: "Yes. All contract staff are sponsored under TASC's visa, so you don't have to worry about quota limits."
    },
    {
      question: "Can I hire staff remotely?",
      answer: "Yes. Our Remote 360 model lets you hire vetted remote professionals across 68+ countries."
    },
    {
      question: "How fast can you provide candidates?",
      answer: "Depending on the role, we can deploy talent in as little as 3–7 business days."
    },
    {
      question: "What are the cost savings with contract staffing?",
      answer: "Companies typically save up to 30% in operating costs through reduced overhead, eliminated recruitment expenses, and streamlined HR processes."
    },
    {
      question: "How do you ensure compliance?",
      answer: "We maintain 100% labor law compliance across all our operations, handling all legal requirements, documentation, and regulatory obligations on your behalf."
    },
    {
      question: "Can I convert contract staff to permanent employees?",
      answer: "Yes, our 'try before you hire' approach allows you to evaluate candidates during their contract period before making permanent offers."
    }
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden bg-gradient-to-br from-white via-[var(--tasc-light-gray)] to-[var(--tasc-accent-blue)]/5">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-[var(--tasc-accent-blue)] to-[var(--tasc-brand-green)] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tl from-[var(--tasc-brand-green)] to-[var(--tasc-navy)] rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-[var(--tasc-navy)]">
            Frequently Asked <span className="tasc-gradient-text-enhanced">Questions</span>
          </h2>
          <p className="text-lg md:text-xl text-[var(--tasc-dark-gray)] max-w-2xl mx-auto">
            Get answers to common questions about our contract staffing services.
          </p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-white/90 backdrop-blur-sm rounded-lg border border-[var(--tasc-border-light)] tasc-shadow overflow-hidden">
              <AccordionTrigger className="px-6 py-4 text-left text-lg md:text-xl text-[var(--tasc-navy)] hover:text-[var(--tasc-accent-blue)] transition-colors hover:bg-[var(--tasc-light-gray)]/50">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-[var(--tasc-dark-gray)] text-base md:text-lg leading-relaxed bg-[var(--tasc-light-gray)]/30">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}