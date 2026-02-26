'use client';

import Container from '@/components/ui/Container';
import FadeIn from '@/components/ui/FadeIn';

export default function FinalCTA() {
  return (
    <section className="relative py-20 lg:py-28 bg-sc-text overflow-hidden">
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <Container className="relative z-10 text-center">
        <FadeIn>
          <h2 className="font-semibold text-2xl lg:text-[40px] lg:leading-[48px] tracking-[-0.03em] text-white mb-10">
            Stop guessing. Start knowing.
          </h2>

          <a
            href="/products"
            className="inline-block bg-sc-blue hover:bg-sc-blue/90 text-white font-semibold text-lg px-12 py-4 rounded-xl min-h-[56px] min-w-[300px] shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-all duration-300 animate-[pulse-shadow_3s_ease-in-out_infinite]"
          >
            Get Instant Access — From $29
          </a>

          <p className="mt-6 text-sm text-white/50">
            30-day guarantee · Instant download · No subscription
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
