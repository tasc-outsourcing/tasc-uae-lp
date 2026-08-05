const roles = {
  leadership: [
    "Chief Risk Officer",
    "Chief Compliance Officer",
    "MLRO & Deputy MLRO",
    "Head of Financial Crime",
    "Head of Internal Audit",
    "Data Protection Officer",
    "Head of Governance",
  ],
  management: [
    "GRC Manager",
    "Compliance Manager",
    "Regulatory Affairs Manager",
    "Business Risk Manager",
    "IT Risk & Cyber Manager",
    "Internal Audit Manager",
    "Third-Party Risk Manager",
  ],
  specialist: [
    "GRC Analyst",
    "KYC / CDD Analyst",
    "Sanctions Screening Analyst",
    "Transaction Monitoring Analyst",
    "Fraud Analyst",
    "Internal Auditor · SOX Specialist",
    "Data Governance · AI Governance",
  ],
};

const columns: { key: keyof typeof roles; label: string }[] = [
  { key: "leadership", label: "Leadership" },
  { key: "management", label: "Management" },
  { key: "specialist", label: "Specialist & Analyst" },
];

export function RolesWeFill() {
  return (
    <section className="px-6 py-20 bg-[#f7fbfc]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#005f83]/50 mb-3">
            Across every level
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#005f83] mb-4 leading-tight tracking-tight">
            Roles We Fill
          </h2>
          <p className="text-[#005f83]/60 max-w-lg mx-auto text-sm">
            From C-suite to analyst, across every GRC sub-specialism.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {columns.map((col) => (
            <div key={col.key} className="bg-white rounded-2xl border-2 border-[#e8f4f8] overflow-hidden">
              <div className="px-6 py-4" style={{ background: "linear-gradient(45deg, #00bfff 0%, #45db33 100%)" }}>
                <h3 className="font-black text-white text-sm uppercase tracking-widest">{col.label}</h3>
              </div>
              <ul className="divide-y divide-[#e8f4f8]">
                {roles[col.key].map((role) => (
                  <li key={role} className="px-6 py-3 text-sm text-[#005f83] font-medium hover:bg-[#f0fafe] transition-colors">
                    {role}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-center text-[#005f83]/50 text-sm italic">
          Not listed? Tell us the role. We have almost certainly filled it.
        </p>
      </div>
    </section>
  );
}
