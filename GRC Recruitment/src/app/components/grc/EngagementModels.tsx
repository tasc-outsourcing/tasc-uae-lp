import { UserCheck, Clock3, ArrowLeftRight, Users2, Building2, Flag } from "lucide-react";

const models = [
  {
    icon: UserCheck,
    title: "Permanent Recruitment",
    description: "Direct hire for roles that need full-time, named accountability.",
    bestWhen: "Best when the role is a licence condition — MLRO, Compliance Officer, DPO.",
  },
  {
    icon: Clock3,
    title: "Contract Hiring",
    description: "Fixed-term specialists for remediation, implementation and backlog clearance.",
    bestWhen: "Best when there's an end date: a lookback, a licence application, a system migration.",
  },
  {
    icon: ArrowLeftRight,
    title: "Interim Cover",
    description: "An experienced person in the seat within days, while the permanent search runs behind it.",
    bestWhen: "Best when someone has resigned and the vacancy is hard to explain to a regulator.",
  },
  {
    icon: Users2,
    title: "Managed Teams",
    description: "A screened team, managed by us, working to your procedures and quality standards.",
    bestWhen: "Best when it's KYC remediation or file review at volume, or a function built from zero.",
  },
  {
    icon: Building2,
    title: "EOR & Payroll",
    description: "We employ, visa and pay them. You direct the work.",
    bestWhen: "Best when you have no UAE entity yet, or the hire sits outside approved headcount.",
  },
  {
    icon: Flag,
    title: "Emirati Hiring Pipelines",
    description: "UAE National talent at analyst and officer level, with structured progression attached.",
    bestWhen: "Best when Emiratisation targets, succession, or regulatory relationship roles are in play.",
  },
];

export function EngagementModels() {
  return (
    <section className="px-6 py-20 bg-[#f7fbfc]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#005f83]/50 mb-3">
            How we work with you
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#005f83] mb-4 leading-tight tracking-tight">
            Engagement Models
          </h2>
          <p className="text-[#005f83]/60 max-w-lg mx-auto text-sm leading-relaxed">
            Most GRC functions we resource use two or three of these at once.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {models.map((model, i) => {
            const Icon = model.icon;
            return (
              <div
                key={i}
                className="group bg-white rounded-2xl border-2 border-[#e8f4f8] p-7 hover:border-transparent hover:shadow-xl transition-all duration-300 flex flex-col"
                style={{ "--hover-border": "transparent" } as React.CSSProperties}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 2px #00bfff, 0 20px 40px -12px rgba(0,95,131,0.18)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "";
                  (e.currentTarget as HTMLElement).style.borderColor = "#e8f4f8";
                }}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl mb-5 flex items-center justify-center shrink-0"
                  style={{ background: "linear-gradient(45deg, #00bfff 0%, #45db33 100%)" }}>
                  <Icon className="w-5 h-5 text-white" strokeWidth={2.5} />
                </div>

                {/* Content */}
                <h3 className="text-base font-black text-[#005f83] mb-2 tracking-tight">{model.title}</h3>
                <p className="text-[#005f83]/70 text-sm leading-relaxed mb-4 flex-1">{model.description}</p>

                {/* Best when */}
                <div className="mt-auto pt-4 border-t border-[#e8f4f8]">
                  <p className="text-xs font-semibold text-[#005f83]/40 uppercase tracking-wider mb-1.5">Best when</p>
                  <p className="text-xs text-[#005f83]/65 leading-relaxed">{model.bestWhen.replace("Best when ", "")}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
