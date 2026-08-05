import { useState } from "react";
import { ChevronDown } from "lucide-react";

const objections = [
  {
    q: "How fast, realistically?",
    a: "Specialist and analyst roles: shortlist in 5 working days from a resident pool. Senior named roles take longer, and the constraint is regulatory approval and notice periods, not sourcing. If the seat cannot stay empty, we cover it while the search runs.",
  },
  {
    q: "Do you actually understand these roles?",
    a: "Ask us the difference between a sanctions analyst and a financial crime investigator on the scope call. It is the fastest way to test any agency in this market, including us.",
  },
  {
    q: "What does it cost to start?",
    a: "Nothing. The scope call, the shortlist and the rate benchmarks are free. You pay on placement.",
  },
];

export function ObjectionsSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="px-6 py-20 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#005f83]/50 mb-3">
            Common questions
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#005f83] leading-tight tracking-tight">
            Before You Fill in the Form
          </h2>
        </div>

        <div className="space-y-4">
          {objections.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl border-2 transition-colors duration-300 overflow-hidden"
              style={{ borderColor: open === i ? "#00bfff" : "#e8f4f8" }}>
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-black text-[#005f83] text-base tracking-tight">{item.q}</span>
                <ChevronDown
                  className="w-5 h-5 shrink-0 transition-transform duration-300"
                  style={{ color: "#00bfff", transform: open === i ? "rotate(180deg)" : "rotate(0deg)" }}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-[#005f83]/70 text-sm leading-relaxed border-t border-[#e8f4f8] pt-4">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
