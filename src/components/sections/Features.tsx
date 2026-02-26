'use client';

import Image from 'next/image';
import Container from '@/components/ui/Container';
import FadeIn from '@/components/ui/FadeIn';
import { Calculator, Zap, RefreshCw } from 'lucide-react';

const features = [
  {
    icon: Calculator,
    title: 'Zero broken formulas',
    description: 'Tested on $5M+ real projects.',
    detail: 'Free templates are built for screenshots. Ours are built to produce accurate numbers. Every reference tested, every edge case handled, every calculation documented.',
  },
  {
    icon: Zap,
    title: 'Ready in 5 minutes',
    description: 'No training. No onboarding calls.',
    detail: 'Open. Plug in your numbers. Done. Every cell is labeled, every formula is explained. If you can use Excel, you can use SheetCraft.',
  },
  {
    icon: RefreshCw,
    title: 'Pay once, own forever',
    description: 'No subscriptions. Lifetime updates.',
    detail: 'When tax rules change, when we add features, when we improve a formula — you get the update automatically. Excel + Google Sheets, both included.',
  },
];

export default function Features() {
  return (
    <section className="py-16 lg:py-20">
      <Container>
        <FadeIn>
          <h2 className="font-semibold text-2xl lg:text-[32px] lg:leading-[40px] tracking-[-0.02em] text-center mb-3 gradient-text">
            Why 2,000+ pros pay for these
          </h2>
          <p className="text-center text-sc-text-muted text-sm mb-14">(when free templates exist everywhere)</p>
        </FadeIn>

        {/* Founder story */}
        <FadeIn>
          <div className="bg-sc-bg py-10 lg:py-14 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 rounded-t-xl">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 max-w-4xl mx-auto">
              {/* Photo */}
              <div className="shrink-0">
                <div className="w-[120px] h-[120px] rounded-full overflow-hidden border-2 border-sc-border shadow-card">
                  <Image
                    src="/images/founder-jake.jpg"
                    alt="Jake Mitchell, Founder of SheetCraft"
                    width={120}
                    height={120}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="text-center lg:text-left">
                <h3 className="font-semibold text-xl lg:text-2xl text-sc-text mb-3">
                  I built these because I needed them
                </h3>
                <p className="text-sm text-sc-text-muted leading-relaxed mb-4">
                  After 15 years as a general contractor, I was tired of broken free templates and $500/month software that did too much. So I built exactly what I needed — and what every contractor and investor needs: clean, reliable spreadsheets that just work.
                </p>
                <p className="text-sm font-semibold text-sc-text italic">
                  — Jake Mitchell, Founder of SheetCraft
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Remaining features — zigzag */}
        <div className="space-y-0">
          {features.map((feature, i) => {
            const isReversed = i % 2 === 1;
            const bgClass = i % 2 === 0 ? 'bg-sc-bg-alt' : 'bg-sc-bg';

            return (
              <div key={feature.title} className={`${bgClass} py-10 lg:py-14 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 ${i === features.length - 1 ? 'rounded-b-xl' : ''}`}>
                <div className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 max-w-4xl mx-auto ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Text */}
                  <FadeIn direction={isReversed ? 'right' : 'left'} delay={0.1} className="flex-1">
                    <h3 className="font-semibold text-xl lg:text-2xl text-sc-text mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-base text-sc-blue font-medium mb-3">
                      {feature.description}
                    </p>
                    <p className="text-sm text-sc-text-muted leading-relaxed">
                      {feature.detail}
                    </p>
                  </FadeIn>

                  {/* Visual */}
                  <FadeIn direction={isReversed ? 'left' : 'right'} delay={0.2} className="shrink-0">
                    <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-2xl bg-sc-card border border-sc-border shadow-card flex items-center justify-center">
                      <feature.icon size={40} className="text-sc-blue" strokeWidth={1.5} />
                    </div>
                  </FadeIn>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
