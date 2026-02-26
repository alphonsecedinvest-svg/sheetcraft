'use client';

import Link from 'next/link';
import { useRef, useEffect } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  onClick?: () => void;
  fullWidth?: boolean;
}

const baseTransition = 'transition-all duration-200';

const variantClasses: Record<ButtonVariant, string> = {
  primary: `relative overflow-hidden bg-gradient-to-b from-[#2563EB] to-[#1D4ED8] text-white font-bold text-base px-10 py-4 rounded-full ${baseTransition} shadow-[0_4px_14px_rgba(37,99,235,0.4)] hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(37,99,235,0.45)] hover:brightness-110 active:translate-y-0 active:shadow-[0_4px_14px_rgba(37,99,235,0.4)]`,
  secondary: `bg-transparent text-sc-text border border-sc-border font-semibold text-sm px-8 py-[14px] rounded-full ${baseTransition} hover:bg-sc-bg-alt hover:border-sc-text-muted/30`,
  ghost: `text-sc-blue font-medium underline underline-offset-[3px] transition-colors duration-200 hover:text-sc-blue/70`,
};

export default function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  onClick,
  fullWidth = false,
}: ButtonProps) {
  const shimmerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (variant !== 'primary' || !shimmerRef.current) return;
    const el = shimmerRef.current;
    el.style.animation = 'btn-shimmer 1.5s ease-in-out';
    const handleEnd = () => { el.style.animation = 'none'; };
    el.addEventListener('animationend', handleEnd);
    return () => el.removeEventListener('animationend', handleEnd);
  }, [variant]);

  const classes = `${variantClasses[variant]} ${fullWidth ? 'w-full' : ''} inline-flex items-center justify-center text-center min-h-[52px] ${className}`;

  const shimmer = variant === 'primary' ? (
    <span
      ref={shimmerRef}
      className="pointer-events-none absolute inset-0 -translate-x-full"
      style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)' }}
      aria-hidden="true"
    />
  ) : null;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {shimmer}
        <span className="relative z-[1]">{children}</span>
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {shimmer}
      <span className="relative z-[1]">{children}</span>
    </button>
  );
}
