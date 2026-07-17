import { useEffect } from 'react';
import type { TranslationSet } from '../../translations';

interface CertificadosProps {
  t: TranslationSet;
  activeSection: string;
}

export function Certificados({ t, activeSection }: CertificadosProps) {
  useEffect(() => {
    // Only add the script if it hasn't been added yet
    if (!document.querySelector('script[src="//cdn.credly.com/assets/utilities/embed.js"]')) {
      const script = document.createElement('script');
      script.src = "//cdn.credly.com/assets/utilities/embed.js";
      script.async = true;
      script.type = "text/javascript";
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div id="certificados" className={`section ${activeSection === 'certificados' ? 'active' : ''}`}>
      <h1>{t.certificados_h1}</h1>

      <div className="acad-grid" style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem', gap: '2rem', flexWrap: 'wrap' }}>
        <div 
          data-iframe-width="150" 
          data-iframe-height="270" 
          data-share-badge-id="a4c82c09-567a-48fb-883e-91bc6d496a2e" 
          data-share-badge-host="https://www.credly.com"
        ></div>
      </div>
    </div>
  );
}
