import { useEffect } from 'react';
import type { TranslationSet } from '../../translations';
import { Button } from '../atoms/Button';

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

  const isPt = t.certificados_h1 === 'Certificações';

  return (
    <div id="certificados" className={`section ${activeSection === 'certificados' ? 'active' : ''}`}>
      <h1>{t.certificados_h1}</h1>

      {/* Featured Coursera Certificate Card */}
      <div style={{ marginBottom: '2.5rem', marginTop: '1.5rem' }}>
        <div className="acad-card card" style={{ padding: '1.5rem' }}>
          <div className="acad-card-top">
            <div className="acad-icon" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
              <span style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-heading)' }}>
                Google AI
              </span>
            </div>
            <span className="acad-status acad-status--done">
              {isPt ? 'Concluído' : 'Completed'}
            </span>
          </div>

          <h3 className="acad-title" style={{ marginTop: '0.75rem', marginBottom: '0.25rem' }}>
            {isPt ? 'Certificado Profissional Google AI' : 'Google AI Professional Certificate'}
          </h3>
          <span className="acad-institution">Google — Coursera</span>
          <span className="acad-period" style={{ display: 'block', marginTop: '2px' }}>27/07/2026</span>

          <p style={{ fontSize: '0.9rem', opacity: 0.85, margin: '0.85rem 0', lineHeight: 1.5 }}>
            {isPt
              ? 'Certificado Profissional composto por 7 cursos demonstrando fluência e aplicação prática de IA em brainstorming, pesquisa, escrita, comunicação, criação de conteúdo, análise de dados e desenvolvimento de aplicações com IA.'
              : 'Professional Certificate consisting of 7 courses demonstrating fluency and practical application of AI in brainstorming, research, writing, communication, content creation, data analysis, and building AI apps.'}
          </p>

          <div className="acad-tags" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.25rem' }}>
            <span className="timeline-tag">AI Fundamentals</span>
            <span className="timeline-tag">AI for Brainstorming and Planning</span>
            <span className="timeline-tag">AI for Research and Insights</span>
            <span className="timeline-tag">AI for Writing and Communicating</span>
            <span className="timeline-tag">AI for Content Creation</span>
            <span className="timeline-tag">AI for Data Analysis</span>
            <span className="timeline-tag">AI for App Building</span>
          </div>

          <div className="acad-action">
            <a
              href="https://coursera.org/verify/professional-cert/FLXB2QI17CGK"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <Button style={{ padding: '8px 16px', fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                {isPt ? 'Verificar Certificado (Coursera)' : 'Verify Certificate (Coursera)'}
              </Button>
            </a>
          </div>
        </div>
      </div>

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
        <div 
          data-iframe-width="150" 
          data-iframe-height="270" 
          data-share-badge-id="6c881d4d-5a67-4f9c-987c-68578532381b" 
          data-share-badge-host="https://www.credly.com"
        ></div>
        <div 
          data-iframe-width="150" 
          data-iframe-height="270" 
          data-share-badge-id="8aba53f4-8196-4e6d-ac43-14f18008ed2d" 
          data-share-badge-host="https://www.credly.com"
        ></div>
        <div 
          data-iframe-width="150" 
          data-iframe-height="270" 
          data-share-badge-id="d5e787f1-92bb-4333-bf41-bb07f5012314" 
          data-share-badge-host="https://www.credly.com"
        ></div>
      </div>
    </div>
  );
}
