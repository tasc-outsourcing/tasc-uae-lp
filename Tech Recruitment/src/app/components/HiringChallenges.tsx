import { Clock, FileText, Users } from "lucide-react";

export function HiringChallenges() {
  const challenges = [
    {
      icon: Clock,
      title: "Hiring Delays",
      description: "Extended recruitment cycles that slow down critical business operations and project timelines."
    },
    {
      icon: FileText,
      title: "Localization Mandates",
      description: "Complex Saudization requirements that require specialized knowledge and strategic planning."
    },
    {
      icon: Users,
      title: "Scarce Bilingual Talent",
      description: "Limited pool of qualified candidates with both technical skills and Arabic-English proficiency."
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-gray-900">
            The Hiring Challenges You Face
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Recruiting in Saudi Arabia comes with unique obstacles that can slow down your growth and impact your bottom line.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                <challenge.icon className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl mb-4 text-gray-900">
                {challenge.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {challenge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}