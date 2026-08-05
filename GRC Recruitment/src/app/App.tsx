import imgLogo from "@/assets/tasc-primary-logo.png";
import { GRCHero } from "./components/grc/GRCHero";
import { PainSection } from "./components/grc/PainSection";
import { WhatYouGet } from "./components/grc/WhatYouGet";
import { RolesWeFill } from "./components/grc/RolesWeFill";
import { ProofStrip } from "./components/grc/ProofStrip";
import { HowItWorks } from "./components/grc/HowItWorks";
import { EngagementModels } from "./components/grc/EngagementModels";
import { ObjectionsSection } from "./components/grc/ObjectionsSection";
import { BelowFoldForm } from "./components/grc/BelowFoldForm";
import { GRCFooter } from "./components/grc/GRCFooter";

function GRCHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-[#e0f2f1]">
      <div className="max-w-7xl mx-auto flex items-center px-6 md:px-10 py-3">
        <div className="h-[32px] w-[130px] shrink-0">
          <img alt="TASC" className="object-contain size-full" src={imgLogo} />
        </div>
        <div className="ml-auto hidden md:block">
          <span className="text-xs font-semibold text-[#005f83]/50 uppercase tracking-widest">
            GRC Recruitment · United Arab Emirates
          </span>
        </div>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <div className="min-h-screen w-full font-['Montserrat',sans-serif]">
      <GRCHeader />
      <GRCHero />
      <PainSection />
      <WhatYouGet />
      <RolesWeFill />
      <ProofStrip />
      <HowItWorks />
      <EngagementModels />
      <ObjectionsSection />
      <BelowFoldForm />
      <GRCFooter />
    </div>
  );
}
