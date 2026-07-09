import type { TranslationSet } from '../../translations';
import { PartnershipCard } from '../molecules/PartnershipCard';

interface ParceriasProps {
  t: TranslationSet;
  activeSection: string;
}

export function Parcerias({ t, activeSection }: ParceriasProps) {
  return (
    <div id="parcerias" className={`section ${activeSection === 'parcerias' ? 'active' : ''}`}>
      <h1>{t.proj_partners_h1}</h1>

      <div className="skills-grid">
        <PartnershipCard 
          category="Alura"
          title={t.proj_partners_alura_desc}
          description="Aproveite o desconto exclusivo para a maior plataforma de tecnologia."
          coupon="star_lari"
          couponLabel="CUPOM"
          buttonText={t.proj_partners_alura_btn}
          buttonLink="https://www.alura.com.br/indique-e-ganhe/larissaamca"
        />

        <PartnershipCard 
          category="Use_T.I"
          title={t.proj_partners_usetii_title}
          description={t.proj_partners_usetii_desc}
          coupon="laridev"
          couponLabel="CUPOM"
          buttonText={t.proj_partners_usetii_btn}
          buttonLink="https://www.useti.shop/useti"
        />

        <PartnershipCard 
          category="FIAP"
          title={t.proj_partners_fiap_title}
          description={t.proj_partners_fiap_desc}
          highlightText={t.proj_partners_fiap_btn}
          highlightLink="https://www.instagram.com/lari.devcode"
        />

        <PartnershipCard 
          category="Casa do Código"
          title={t.proj_partners_cdc_title}
          description={t.proj_partners_cdc_desc}
          coupon="AF-b5d2572e"
          couponLabel="CUPOM"
          buttonText={t.proj_partners_cdc_btn}
          buttonLink="https://www.casadocodigo.com.br/?cupom=AF-b5d2572e"
        />
      </div>
    </div>
  );
}
