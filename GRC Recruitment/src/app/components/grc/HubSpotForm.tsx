import { useEffect } from "react";

const HUBSPOT_PORTAL_ID = "20309062";
const HUBSPOT_FORM_ID = "aaaba973-e100-4ca1-aaa5-26ceb501fed4";

export function HubSpotForm({ className = "" }: { className?: string }) {
  useEffect(() => {
    const scriptId = `hubspot-forms-embed-${HUBSPOT_PORTAL_ID}`;

    if (document.getElementById(scriptId)) return;

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = `https://js.hsforms.net/forms/embed/${HUBSPOT_PORTAL_ID}.js`;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className={`hs-form-frame min-h-[420px] ${className}`}
      data-region="na1"
      data-form-id={HUBSPOT_FORM_ID}
      data-portal-id={HUBSPOT_PORTAL_ID}
    />
  );
}
