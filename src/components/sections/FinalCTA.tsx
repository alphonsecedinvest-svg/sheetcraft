'use client';

import Container from '@/components/ui/Container';
import FadeIn from '@/components/ui/FadeIn';
import Button from '@/components/ui/Button';
import DottedGlowBackground from '@/components/ui/DottedGlowBackground';
import { Lock, Zap, FileSpreadsheet } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="relative py-16 lg:py-20 overflow-hidden">
      <DottedGlowBackground />
      <Container className="relative z-10 text-center">
        <FadeIn>
          <h2 className="font-semibold text-2xl lg:text-[32px] lg:leading-[40px] tracking-[-0.02em] text-white mb-4 gradient-text">
            Every deal you analyze with the wrong spreadsheet is a deal you might get wrong.
          </h2>
          <p className="text-lg text-sc-text-muted mb-8 max-w-lg mx-auto">
            Professional templates. Proven formulas. Precise numbers. Get the tools that 2,000+ contractors and investors already trust — and start making decisions with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
            <Button href="/products">
              Get Instant Access — From $29
            </Button>
            <Button href="/products" variant="ghost">
              Preview Any Template →
            </Button>
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-sm text-sc-text-muted/60">
            <span className="flex items-center gap-1.5"><Lock size={14} /> 30-day money-back guarantee</span>
            <span className="flex items-center gap-1.5"><Zap size={14} /> Instant download</span>
            <span className="flex items-center gap-1.5"><FileSpreadsheet size={14} /> Excel + Google Sheets</span>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
