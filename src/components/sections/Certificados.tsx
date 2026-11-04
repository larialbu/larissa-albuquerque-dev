import { useEffect, useState } from 'react';
import type { UI, Lang } from '../../ui';
import { Icon } from '../atoms/Icons';
import { Modal } from '../organisms/Modal';

interface CertificadosProps {
  u: UI;
  lang: Lang;
}

const BADGES = [
  'a4c82c09-567a-48fb-883e-91bc6d496a2e',
  '51d15900-a868-4397-ad3a-78de026e0f1f',
  '6ed212c3-515a-4bf8-9bd9-509b6b177e51',
  'b61c0920-a6b7-4afd-806b-dfde84bbd5c9',
  'aa479d0c-7463-46b0-885e-92cc11ec20f6',
  '6c881d4d-5a67-4f9c-987c-68578532381b',
  '8aba53f4-8196-4e6d-ac43-14f18008ed2d',
  'd5e787f1-92bb-4333-bf41-bb07f5012314',
];

const COURSES = [
  'AI Fundamentals',
  'AI for Brainstorming and Planning',
  'AI for Research and Insights',
  'AI for Writing and Communicating',
  'AI for Content Creation',
  'AI for Data Analysis',
  'AI for App Building',
];

export function Certificados({ u, lang }: CertificadosProps) {
  const [open, setOpen] = useState(false);
  const isPt = lang === 'pt';

  const loadCredlyScript = () => {
    // Remove old script if exists to force Credly to parse new DOM nodes
    const oldScript = document.getElementById('credly-embed-script');
    if (oldScript) {
      oldScript.remove();
    }
    const script = document.createElement('script');
    script.id = 'credly-embed-script';
    script.src = '//cdn.credly.com/assets/utilities/embed.js';
    script.async = true;
    document.body.appendChild(script);
  };

  useEffect(() => {
    if (open) {
      // Allow modal DOM to render, then load/trigger Credly embeds
      const timer = setTimeout(() => {
        loadCredlyScript();
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [open]);

  return (
    <div id="certificados" className="container" style={{ marginTop: 48 }}>
      <h3 className="sub-title reveal">{u.certificates_title}</h3>

      {/* Main card - clickable to open modal with badges */}
      <button
        type="button"
        className="glass spot card cert-card-clickable reveal clickable"
        id="cert-google-ai"
        onClick={() => setOpen(true)}
      >
        <div className="cert-header">
          <div className="cert-meta-left">
            <span className="chip mint">Google — Coursera · 27/07/2026</span>
          </div>
          <span className="more">
            {u.details} {Icon.arrow}
          </span>
        </div>

        <h3 className="cert-title">
          {isPt ? 'Certificado Profissional Google AI' : 'Google AI Professional Certificate'}
        </h3>

        <p className="cert-desc">
          {isPt
            ? 'Certificado Profissional composto por 7 cursos demonstrando fluência e aplicação prática de IA em brainstorming, pesquisa, escrita, comunicação, criação de conteúdo, análise de dados e desenvolvimento de aplicações com IA.'
            : 'Professional Certificate consisting of 7 courses demonstrating fluency and practical application of AI in brainstorming, research, writing, communication, content creation, data analysis, and building AI apps.'}
        </p>

        <div className="tags cert-tags">
          {COURSES.map((c) => (
            <span key={c} className="tag tag-course">
              {c}
            </span>
          ))}
        </div>
      </button>

      {/* Modal with complete certificate details and Credly badges */}
      <Modal open={open} onClose={() => setOpen(false)} label="Certificado Google AI" wide>
        <div className="modal-inner">
          <div className="cert-header">
            <span className="chip mint">Google — Coursera · 27/07/2026</span>
            <a
              className="btn btn-primary btn-sm"
              href="https://coursera.org/verify/professional-cert/FLXB2QI17CGK"
              target="_blank"
              rel="noreferrer"
              id="btn-verify-cert"
            >
              {Icon.external} {isPt ? 'Verificar no Coursera' : 'Verify on Coursera'}
            </a>
          </div>

          <h2>{isPt ? 'Certificado Profissional Google AI' : 'Google AI Professional Certificate'}</h2>

          <p>
            {isPt
              ? 'Certificado Profissional composto por 7 cursos demonstrando fluência e aplicação prática de IA em brainstorming, pesquisa, escrita, comunicação, criação de conteúdo, análise de dados e desenvolvimento de aplicações com IA.'
              : 'Professional Certificate consisting of 7 courses demonstrating fluency and practical application of AI in brainstorming, research, writing, communication, content creation, data analysis, and building AI apps.'}
          </p>

          <div className="divider" />

          <div className="modal-label">
            {isPt ? 'Cursos que compõem o programa:' : 'Courses included in the program:'}
          </div>
          <div className="tags cert-tags">
            {COURSES.map((c) => (
              <span key={c} className="tag tag-course">
                {c}
              </span>
            ))}
          </div>

          <div className="divider" style={{ marginTop: 8 }} />

          <div className="cert-badges-wrapper">
            <span className="cert-badges-label">
              {isPt ? 'Badges oficiais emitidas via Credly:' : 'Official badges issued via Credly:'}
            </span>
            <div className="badges cert-badges-inner">
              {BADGES.map((id) => (
                <div
                  key={id}
                  data-iframe-width="150"
                  data-iframe-height="270"
                  data-share-badge-id={id}
                  data-share-badge-host="https://www.credly.com"
                />
              ))}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}


