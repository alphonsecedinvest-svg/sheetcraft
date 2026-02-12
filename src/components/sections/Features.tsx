'use client';

import Container from '@/components/ui/Container';
import FadeIn from '@/components/ui/FadeIn';
import { HardHat, Calculator, Zap, FileSpreadsheet, RefreshCw, Play } from 'lucide-react';

const features = [
  {
    icon: HardHat,
    title: 'Built by industry pros',
    description: 'Created by a general contractor with 15+ years of field experience and a finance background. Not by a template mill.',
  },
  {
    icon: Calculator,
    title: 'Real formulas, real math',
    description: 'Markup calculations, change order tracking, cap rate analysis, amortization schedules — already built in and tested.',
  },
  {
    icon: Zap,
    title: 'Works in 5 minutes',
    description: 'Open. Plug in your numbers. Done. No setup wizards. No learning curve. Every cell is labeled, every formula explained.',
  },
  {
    icon: FileSpreadsheet,
    title: 'Excel + Google Sheets',
    description: 'Every template works in both platforms. Use what you already have. No new software to learn.',
  },
  {
    icon: RefreshCw,
    title: 'Lifetime updates',
    description: 'Buy once. Get every improvement we make. Forever. When tax rules change, when we add a new feature — you get it automatically.',
  },
  {
    icon: Play,
    title: 'Video walkthrough included',
    description: 'Each template comes with a 5-minute video showing you exactly how to use it. Open the video, follow along, and you\'re done.',
  },
];

export default function Features() {
  return (
    <section className="py-12 lg:py-16 bg-white">
      <Container>
        <FadeIn>
          <h2 className="font-heading font-semibold text-2xl lg:text-[32px] lg:leading-[40px] text-navy text-center mb-10">
            Not your average free template
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <FadeIn key={feature.title} delay={i * 0.08}>
              <div className="flex flex-col items-start">
                <div className="w-14 h-14 rounded-full bg-cloud flex items-center justify-center mb-4">
                  <feature.icon size={28} className="text-amber" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-navy mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
