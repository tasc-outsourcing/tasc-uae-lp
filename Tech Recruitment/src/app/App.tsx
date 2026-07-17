import { TechRecruitmentHero } from "./components/TechRecruitmentHero";
import { TechSpecializations } from "./components/TechSpecializations";
import { HowWeDeliver } from "./components/HowWeDeliver";
import { PoweredByAIQU } from "./components/PoweredByAIQU";
import { TechWhyChooseUs } from "./components/TechWhyChooseUs";
import { TechFinalCTA } from "./components/TechFinalCTA";
import { TechContactSection } from "./components/TechContactSection";

export default function App() {
  return (
    <div className="min-h-screen">
      <TechRecruitmentHero />
      <TechSpecializations />
      <HowWeDeliver />
      <PoweredByAIQU />
      <TechWhyChooseUs />
      <TechFinalCTA />
      <TechContactSection />
    </div>
  );
}