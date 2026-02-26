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
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;
      const distanceFromBottom = docHeight - scrollY - viewportHeight;

      // Show after 300px scroll, hide when within 600px of bottom (near pricing/footer)
      setVisible(scrollY > 300 && distanceFromBottom > 600);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-sc-card border-t border-sc-border p-3 md:hidden z-50 shadow-elevated">
      <Button href={href} fullWidth>
        {label} — {price}
      </Button>
      <p className="text-[11px] text-sc-text-muted text-center mt-1.5">
        Instant download · Excel + Google Sheets · 30-day guarantee
      </p>
    </div>
  );
}
