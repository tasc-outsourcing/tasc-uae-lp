import { useEffect } from 'react';

interface HubSpotFormProps {
  portalId: string;
  formId: string;
  region?: string;
  className?: string;
}

export function HubSpotForm({ 
  portalId, 
  formId, 
  region = 'na1',
  className = '',
}: HubSpotFormProps) {
  useEffect(() => {
    const scriptId = `hubspot-forms-embed-${portalId}`;
    if (document.getElementById(scriptId)) return;

    const script = document.createElement('script');
    script.id = scriptId;
    script.src = `https://js.hsforms.net/forms/embed/${portalId}.js`;
    script.defer = true;

    document.body.appendChild(script);
  }, [portalId]);

  return (
    <div 
      className={`hs-form-frame ${className}`}
      data-region={region}
      data-form-id={formId}
      data-portal-id={portalId}
    />
  );
}
