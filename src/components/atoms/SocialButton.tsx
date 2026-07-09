import React from 'react';

interface SocialButtonProps {
  href: string;
  label: string;
  icon: React.ReactNode;
}

export function SocialButton({ href, label, icon }: SocialButtonProps) {
  return (
    <a href={href} target="_blank" className="social-button" rel="noreferrer">
      {icon}
      <span>{label}</span>
    </a>
  );
}
