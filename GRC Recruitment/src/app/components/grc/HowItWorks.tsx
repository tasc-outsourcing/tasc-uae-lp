const steps = [
  {
    number: "01",
    title: "Scope call, 20 minutes.",
    body: "We establish which GRC pool the role sits in, whether it is a licence condition, and how fast you need the seat covered.",
  },
  {
    number: "02",
    title: "Shortlist in 5 working days.",
    body: "Screened, UAE-market-tested, with rate benchmarks attached.",
  },
  {
    number: "03",
    title: "You interview. We handle the rest.",
    body: "Offer, onboarding, visa, payroll if you need it.",
  },
];

export function HowItWorks() {
  return (
    <section className="px-6 py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#005f83]/50 mb-3">
            The process
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#005f83] mb-4 leading-tight tracking-tight">
            Three Steps, No Retainer to Start
          </h2>
          <p className="text-[#005f83]/60 max-w-md mx-auto text-sm">
            The scope call, the shortlist and the rate benchmarks are free. You pay on placement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="relative p-8 rounded-2xl border-2 border-[#e8f4f8] hover:shadow-md transition-all duration-300"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 2px #00bfff, 0 12px 30px -8px rgba(0,95,131,0.15)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "";
              }}
            >
              <div className="text-6xl font-black text-[#e8f4f8] mb-4 leading-none select-none">{step.number}</div>
              <h3 className="text-lg font-black text-[#005f83] mb-3 tracking-tight">{step.title}</h3>
              <p className="text-[#005f83]/65 text-sm leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
