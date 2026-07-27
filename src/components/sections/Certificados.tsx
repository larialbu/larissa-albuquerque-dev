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
        <div 
          data-iframe-width="150" 
          data-iframe-height="270" 
          data-share-badge-id="51d15900-a868-4397-ad3a-78de026e0f1f" 
          data-share-badge-host="https://www.credly.com"
        ></div>
        <div 
          data-iframe-width="150" 
          data-iframe-height="270" 
          data-share-badge-id="6ed212c3-515a-4bf8-9bd9-509b6b177e51" 
          data-share-badge-host="https://www.credly.com"
        ></div>
        <div 
          data-iframe-width="150" 
          data-iframe-height="270" 
          data-share-badge-id="b61c0920-a6b7-4afd-806b-dfde84bbd5c9" 
          data-share-badge-host="https://www.credly.com"
        ></div>
        <div 
          data-iframe-width="150" 
          data-iframe-height="270" 
          data-share-badge-id="aa479d0c-7463-46b0-885e-92cc11ec20f6" 
          data-share-badge-host="https://www.credly.com"
        ></div>
      </div>
    </div>
  );
}
