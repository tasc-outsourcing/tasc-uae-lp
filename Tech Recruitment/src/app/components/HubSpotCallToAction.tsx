import { HubSpotForm } from './HubSpotForm';
import { Button } from './ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

export function HubSpotCallToAction() {
  // TODO: Replace with your actual HubSpot credentials
  const HUBSPOT_PORTAL_ID = "YOUR_PORTAL_ID_HERE";
  const HUBSPOT_FORM_ID = "YOUR_FORM_ID_HERE";

  const benefits = [
    "Expert consultation within 24 hours",
    "Customized staffing solutions",
    "No commitment initial assessment",
    "Access to 1.5M+ candidate database"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[var(--tasc-navy)] via-[var(--tasc-accent-blue)] to-[var(--tasc-brand-green)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Ready to Transform Your 
                <span className="text-[var(--tasc-bright-green)]"> Workforce?</span>
              </h2>
              <p className="text-xl text-white/90 leading-relaxed">
                Join hundreds of successful companies who trust TASC for their staffing needs. 
                Get started with a free consultation today.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-[var(--tasc-bright-green)] flex-shrink-0" />
                  <span className="text-white/90">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Alternative Contact Options */}
            <div className="pt-6 border-t border-white/20">
              <p className="text-white/80 mb-4">Prefer to talk directly?</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white hover:text-[var(--tasc-navy)] bg-white/5 backdrop-blur-sm"
                  asChild
                >
                  <a href="tel:+971-4-358-8500">
                    Call +971 4 358 8500
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white hover:text-[var(--tasc-navy)] bg-white/5 backdrop-blur-sm"
                  asChild
                >
                  <a href="mailto:info@tascoutsourcing.com">
                    Email Us
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Right - HubSpot Form */}
          <div className="bg-white rounded-2xl p-8 tasc-shadow-lg">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-[var(--tasc-navy)] mb-2">
                Get Your Free Consultation
              </h3>
              <p className="text-[var(--tasc-dark-gray)]">
                Fill out the form below and our team will contact you within 2 business hours.
              </p>
            </div>

            <HubSpotForm
              portalId={HUBSPOT_PORTAL_ID}
              formId={HUBSPOT_FORM_ID}
              className="hubspot-cta-form"
              onReady={() => console.log('CTA form ready')}
              onSubmit={() => {
                console.log('CTA form submitted');
                // Add success tracking, analytics, etc.
              }}
            />
          </div>
        </div>
      </div>

      {/* HubSpot Form Styling for CTA */}
      <style jsx>{`
        .hubspot-cta-form :global(.hbspt-form) {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif !important;
        }
        
        .hubspot-cta-form :global(.hs-form-field) {
          margin-bottom: 1.25rem !important;
        }
        
        .hubspot-cta-form :global(.hs-form-field label) {
          color: var(--tasc-navy) !important;
          font-weight: 500 !important;
          margin-bottom: 0.5rem !important;
          font-size: 0.875rem !important;
        }
        
        .hubspot-cta-form :global(.hs-input) {
          width: 100% !important;
          padding: 0.75rem !important;
          border: 2px solid var(--tasc-border-light) !important;
          border-radius: 0.5rem !important;
          font-size: 1rem !important;
          transition: border-color 0.2s ease !important;
        }
        
        .hubspot-cta-form :global(.hs-input:focus) {
          border-color: var(--tasc-accent-blue) !important;
          outline: none !important;
          box-shadow: 0 0 0 3px rgba(0, 92, 191, 0.1) !important;
        }
        
        .hubspot-cta-form :global(.hs-button) {
          background: var(--tasc-gradient) !important;
          color: white !important;
          border: none !important;
          padding: 0.875rem 2rem !important;
          border-radius: 0.75rem !important;
          font-weight: 500 !important;
          font-size: 1rem !important;
          cursor: pointer !important;
          transition: all 0.2s ease !important;
          width: 100% !important;
        }
        
        .hubspot-cta-form :global(.hs-button:hover) {
          transform: translateY(-2px) !important;
          box-shadow: 0 10px 25px -5px rgba(0, 92, 191, 0.25) !important;
        }
      `}</style>
    </section>
  );
}