'use client';

import Container from '@/components/ui/Container';
import FadeIn from '@/components/ui/FadeIn';
import { HardHat, Calculator, Zap, FileSpreadsheet, RefreshCw, Shield } from 'lucide-react';

const features = [
  {
    icon: HardHat,
    title: 'Built by a 15-year general contractor — not a template mill',
    description: 'Created by a GC with 15+ years managing real construction budgets and a finance background. Every formula reflects how the industry actually works — not how a spreadsheet designer imagines it works.',
  },
  {
    icon: Calculator,
    title: 'Tested formulas. Zero broken references.',
    description: 'Free templates are built to look good in a screenshot. Ours are built to produce accurate numbers on a $5M project. Markup calculations, change order tracking, cap rate analysis — all pre-built, all tested, all documented.',
  },
  {
    icon: Zap,
    title: 'Productive in 5 minutes, not 5 hours',
    description: 'Open. Plug in your numbers. Done. No training videos. No onboarding calls. Every cell is labeled, every formula is explained. If you can use Excel, you can use SheetCraft — that\'s the whole point.',
  },
  {
    icon: FileSpreadsheet,
    title: 'Excel + Google Sheets — both included',
    description: 'Every purchase includes both formats, optimized for each platform. Use the tools you already know. No new software to learn, no ecosystem to get locked into. That\'s pro power without the pro complexity.',
  },
  {
    icon: RefreshCw,
    title: 'Pay once. Get lifetime updates.',
    description: 'No subscriptions. No annual renewals. When tax rules change, when we add features, when we improve a formula — you get the update automatically. Free. Forever.',
  },
  {
    icon: Shield,
    title: '30-day money-back guarantee',
    description: 'If the templates don\'t work for you, email us within 30 days. Full refund, no questions asked. We\'ve processed fewer than 10 refunds in 2,000+ sales.',
  },
];

export default function Features() {
  return (
    <section className="py-12 lg:py-16 bg-white">
      <Container>
        <FadeIn>
          <h2 className="font-heading font-semibold text-2xl lg:text-[32px] lg:leading-[40px] text-navy text-center mb-3">
            Why 2,000+ pros pay for these templates
          </h2>
          <p className="text-center text-slate text-sm mb-10">(when free ones exist everywhere)</p>
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
