'use client';

import Container from '@/components/ui/Container';
import FadeIn from '@/components/ui/FadeIn';
import Button from '@/components/ui/Button';
import { Lock } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-16 lg:py-20 bg-navy">
      <Container className="text-center">
        <FadeIn>
          <h2 className="font-heading font-semibold text-2xl lg:text-[32px] lg:leading-[40px] text-white mb-4">
            Ready to stop winging it?
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-lg mx-auto">
            Get professional templates that pay for themselves on day one.
          </p>
          <Button href="/products">
            Browse Templates — From $29
          </Button>
          <div className="mt-5 flex items-center justify-center gap-2 text-sm text-white/50">
            <Lock size={14} />
            30-day money-back guarantee
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
