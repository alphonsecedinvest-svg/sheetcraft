'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

      setVisible(scrollY > 300 && distanceFromBottom > 600);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 left-0 right-0 bg-white p-3 md:hidden z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="font-bold text-lg text-sc-text font-mono">{price}</span>
            <span className="text-xs text-sc-text-muted">one-time payment</span>
          </div>
          <Button
            href={href}
            fullWidth
            className="animate-[pulse-cta_3s_ease-in-out_infinite]"
          >
            {label}
          </Button>
          <p className="text-[11px] text-sc-text-muted text-center mt-1.5">
            Instant download · Excel + Google Sheets · 30-day guarantee
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
