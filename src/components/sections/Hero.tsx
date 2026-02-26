'use client';

import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import MockupFrame from '@/components/ui/MockupFrame';
import SpreadsheetMockup from '@/components/ui/SpreadsheetMockup';
import FadeIn from '@/components/ui/FadeIn';
import DottedGlowBackground from '@/components/ui/DottedGlowBackground';
import { stats, trustLogos } from '@/lib/constants';

const trustStats = [
  { value: '2,000+', label: 'pros' },
  { value: '$50M+', label: 'tracked' },
  { value: '4.9★', label: 'average' },
];

export default function Hero() {
  return (
    <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 overflow-hidden">
      <DottedGlowBackground />

      <Container className="relative z-10">
        <div className="lg:grid lg:grid-cols-[55%_45%] lg:gap-12 lg:items-center">
          {/* Left — Copy */}
          <div className="text-center lg:text-left">
            <FadeIn delay={0.2}>
              <h1 className="font-extrabold text-[40px] leading-[1.05] sm:text-[56px] lg:text-[72px] tracking-[-0.03em] gradient-text">
                Stop guessing.
                <br />
                Start building.
              </h1>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="mt-5 text-lg lg:text-xl text-sc-text-muted max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Pro-grade construction &amp; real estate spreadsheets. The power
                of $500/month software — yours for $29.
              </p>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 items-center lg:justify-start justify-center">
                <Button href="/products" fullWidth className="sm:!w-auto">
                  Get Instant Access — From $29
                </Button>
                <Button href="/products" variant="ghost">
                  Preview Any Template →
                </Button>
              </div>

              {/* Microcopy */}
              <p className="mt-3 text-xs text-sc-text-muted text-center lg:text-left">
                Instant download · Excel + Google Sheets · 30-day guarantee
              </p>
            </FadeIn>

            {/* Trust stats */}
            <FadeIn delay={0.8}>
              <div className="mt-6 flex items-center gap-4 justify-center lg:justify-start">
                {trustStats.map((stat, i) => (
                  <div key={stat.label} className="flex items-center gap-4">
                    {i > 0 && (
                      <span className="w-px h-4 bg-sc-border" aria-hidden="true" />
                    )}
                    <div className="text-center lg:text-left">
                      <span className="text-sm font-bold text-sc-text font-mono">
                        {stat.value}
                      </span>
                      <span className="text-xs text-sc-text-muted ml-1">
                        {stat.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right — Animated mockup */}
          <FadeIn delay={0.8} direction="left" className="mt-10 lg:mt-0">
            <MockupFrame>
              <SpreadsheetMockup />
            </MockupFrame>
          </FadeIn>
        </div>

        {/* Trust bar — Company logos */}
        <FadeIn delay={1.0}>
          <div className="mt-14 lg:mt-20 text-center">
            <p className="text-xs text-sc-text-muted/60 uppercase tracking-[0.1em] font-medium mb-5">
              Trusted by teams at
            </p>

            {/* Desktop: static row */}
            <div className="hidden sm:flex items-center justify-center gap-10">
              {trustLogos.map((name) => (
                <span
                  key={name}
                  className="text-sm font-semibold text-sc-text/15 select-none"
                >
                  {name}
                </span>
              ))}
            </div>

            {/* Mobile: scrolling marquee */}
            <div className="sm:hidden overflow-hidden">
              <div className="flex animate-marquee gap-10 w-max">
                {[...trustLogos, ...trustLogos].map((name, i) => (
                  <span
                    key={`${name}-${i}`}
                    className="text-sm font-semibold text-sc-text/15 whitespace-nowrap select-none"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
