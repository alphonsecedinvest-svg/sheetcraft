'use client';

import { useEffect, useState } from 'react';
import Button from '@/components/ui/Button';

interface StickyMobileCTAProps {
  href?: string;
  label?: string;
  price?: string;
}

export default function StickyMobileCTA({
  href = '/products',
  label = 'Get Your Template',
  price = 'From $29',
}: StickyMobileCTAProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 glass border-t border-white/10 p-3 md:hidden z-50">
      <Button href={href} fullWidth>
        {label} — {price}
      </Button>
      <p className="text-[11px] text-sc-text-muted text-center mt-1.5">
        Instant download · Excel + Google Sheets · 30-day guarantee
      </p>
    </div>
  );
}
