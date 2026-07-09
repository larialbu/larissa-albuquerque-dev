import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, style, ...props }: ButtonProps) {
  return (
    <button style={style} {...props}>
      {children}
    </button>
  );
}
