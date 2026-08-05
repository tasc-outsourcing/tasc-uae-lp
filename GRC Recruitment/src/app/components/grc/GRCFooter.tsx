import { Phone, Mail } from "lucide-react";
import imgLogo from "@/assets/tasc-logo-white.webp";

export function GRCFooter() {
  return (
    <footer className="bg-[#002f42] px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo — not clickable per build rules */}
          <div className="h-[30px] w-[120px] shrink-0">
            <img alt="TASC" className="object-contain size-full opacity-80" src={imgLogo} />
          </div>

          {/* Contact */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-sm text-white/50">
            <a href="tel:+97143139999" className="flex items-center gap-1.5 hover:text-white/80 transition-colors">
              <Phone className="w-4 h-4" /> +971 4 313 9999
            </a>
            <a href="https://wa.me/97143139999" className="hover:text-white/80 transition-colors">
              WhatsApp
            </a>
            <a href="mailto:hello@tascoutsourcing.com" className="flex items-center gap-1.5 hover:text-white/80 transition-colors">
              <Mail className="w-4 h-4" /> hello@tascoutsourcing.com
            </a>
          </div>

          {/* Legal */}
          <div className="flex items-center gap-4 text-xs text-white/30">
            <a href="#" className="hover:text-white/50 transition-colors">Privacy Policy</a>
            <span>·</span>
            <a href="#" className="hover:text-white/50 transition-colors">Legal</a>
            <span>·</span>
            <span>© 2026 TASC Outsourcing</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
