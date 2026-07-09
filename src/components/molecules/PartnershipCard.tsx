import { Button } from '../atoms/Button';

interface PartnershipCardProps {
  category: string;
  title: string;
  description: string;
  coupon?: string;
  couponLabel?: string;
  buttonText?: string;
  buttonLink?: string;
  highlightText?: string;
  highlightLink?: string;
}

export function PartnershipCard({
  category,
  title,
  description,
  coupon,
  couponLabel = 'CUPOM',
  buttonText,
  buttonLink,
  highlightText,
  highlightLink
}: PartnershipCardProps) {
  return (
    <div className="card" style={{ padding: '24px' }}>
      <span className="skill-category">{category}</span>
      <strong>{title}</strong>
      <p style={{ marginTop: '8px', fontSize: '0.85rem', lineHeight: 1.5 }}>
        {description}
      </p>
      
      {coupon && (
        <div
          style={{ 
            marginTop: '12px', 
            background: 'rgba(0,0,0,0.03)', 
            padding: '8px', 
            borderRadius: '6px', 
            display: 'inline-block', 
            marginBottom: '12px' 
          }}>
          <strong style={{ fontSize: '0.85rem', color: 'var(--primary)' }}>
            {couponLabel}: {coupon}
          </strong>
        </div>
      )}

      {buttonText && buttonLink && (
        <div style={{ marginTop: coupon ? '4px' : '16px' }}>
          <a href={buttonLink} target="_blank" style={{ textDecoration: 'none' }} rel="noreferrer">
            <Button style={{ padding: '8px 16px', fontSize: '0.9rem' }}>
              {buttonText}
            </Button>
          </a>
        </div>
      )}

      {highlightText && highlightLink && (
        <div style={{ marginTop: '16px' }}>
          <a 
            href={highlightLink} 
            target="_blank" 
            className="highlight"
            style={{ textDecoration: 'none', fontSize: '0.9rem' }} 
            rel="noreferrer"
          >
            {highlightText}
          </a>
        </div>
      )}
    </div>
  );
}
