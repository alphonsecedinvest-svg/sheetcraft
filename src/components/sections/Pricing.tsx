'use client';

import Container from '@/components/ui/Container';
import FadeIn from '@/components/ui/FadeIn';
import Button from '@/components/ui/Button';
import { Check, X } from 'lucide-react';

interface PricingTier {
  name: string;
  price: string;
  originalPrice?: string;
  savings?: string;
  period: string;
  description: string;
  features: { text: string; included: boolean }[];
  cta: string;
  ctaHref: string;
  featured: boolean;
  badge?: string;
  note?: string;
}

const tiers: PricingTier[] = [
  {
    name: 'Single Template',
    price: '$29–$49',
    period: 'one-time',
    description: '1 template of your choice',
    features: [
      { text: '1 template of your choice', included: true },
      { text: 'Excel + Google Sheets', included: true },
      { text: 'Quick Start Guide (PDF)', included: true },
      { text: 'Lifetime updates', included: true },
      { text: '30-day money-back guarantee', included: true },
      { text: 'Priority email support', included: false },
      { text: 'Future templates included', included: false },
    ],
    cta: 'Choose Your Template',
    ctaHref: '/products',
    featured: false,
  },
  {
    name: 'Builder Bundle',
    price: '$99',
    originalPrice: '$147',
    savings: 'Save $48',
    period: 'one-time',
    description: 'Any 3 templates of your choice',
    features: [
      { text: 'Any 3 templates', included: true },
      { text: 'Excel + Google Sheets', included: true },
      { text: 'Quick Start Guides (PDF)', included: true },
      { text: 'Lifetime updates', included: true },
      { text: '30-day money-back guarantee', included: true },
      { text: 'Priority email support', included: true },
      { text: 'Future templates included', included: false },
    ],
    cta: 'Get the Builder Bundle — $99',
    ctaHref: '#',
    featured: true,
    badge: 'MOST POPULAR',
  },
  {
    name: 'Full Toolkit',
    price: '$149',
    originalPrice: '$226',
    savings: 'Save $77 — 34% off',
    period: 'one-time · Includes future templates',
    description: 'All 5 templates + every future release',
    features: [
      { text: 'All 5 templates', included: true },
      { text: 'Excel + Google Sheets', included: true },
      { text: 'Quick Start Guides (PDF)', included: true },
      { text: 'Lifetime updates', included: true },
      { text: '30-day money-back guarantee', included: true },
      { text: 'Priority email support', included: true },
      { text: 'Future templates included free', included: true },
    ],
    cta: 'Get the Full Toolkit — $149',
    ctaHref: '#',
    featured: false,
    badge: 'BEST VALUE',
    note: 'The one most contractors and investors pick.',
  },
];

const sharedBenefits = [
  'One bad deal costs $10,000+. These templates pay for themselves on your first analysis.',
  'Building this yourself? 20+ hours × $50/hr = $1,000. Or you can spend $49.',
  'Every template works on Excel 2016+ and Google Sheets',
  '30-day money-back guarantee — no questions asked',
];

export default function Pricing() {
  return (
    <section className="py-12 lg:py-16 bg-sc-bg-alt">
      <Container>
        <FadeIn>
          <h2 className="font-semibold text-2xl lg:text-[32px] lg:leading-[40px] tracking-[-0.02em] text-white text-center mb-3 gradient-text">
            One payment. Yours forever. No subscriptions.
          </h2>
          <p className="text-center text-sm text-sc-text-muted mb-2">🚀 Launch pricing — these prices won&apos;t last forever.</p>
        </FadeIn>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 items-stretch">
          {tiers.map((tier, i) => (
            <FadeIn key={tier.name} delay={i * 0.1}>
              <div className={`relative glass-card rounded-xl p-6 h-full flex flex-col ${
                tier.featured
                  ? 'border-white/30 bg-white/[0.05] lg:scale-[1.02] shadow-[0_0_30px_rgba(255,255,255,0.1)]'
                  : 'bg-white/[0.03] border-white/10'
              }`}>
                {tier.badge && (
                  <div className={`absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold px-4 py-1 rounded-full ${
                    tier.featured ? 'bg-white text-black' : 'bg-sc-green text-black'
                  }`}>
                    {tier.badge}
                  </div>
                )}

                <div className="text-center mb-6">
                  <p className="font-medium text-sm uppercase text-sc-text-muted tracking-[0.05em]">
                    {tier.name}
                  </p>
                  <div className="mt-3">
                    <span className="font-bold text-[40px] text-white font-mono">{tier.price}</span>
                    {tier.originalPrice && (
                      <span className="ml-2 text-sc-text-muted line-through text-lg">{tier.originalPrice}</span>
                    )}
                  </div>
                  {tier.savings && (
                    <p className="text-sm font-semibold text-sc-green mt-1">{tier.savings}</p>
                  )}
                  <p className="text-sm text-sc-text-muted mt-1">{tier.period}</p>
                  {tier.note && (
                    <p className="text-xs text-sc-amber font-medium mt-2 italic">{tier.note}</p>
                  )}
                </div>

                <div className="border-t border-white/10 pt-4 flex-1">
                  <ul className="space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature.text} className="flex items-start gap-2.5">
                        {feature.included ? (
                          <Check size={18} className="text-sc-green shrink-0 mt-0.5" />
                        ) : (
                          <X size={18} className="text-white/20 shrink-0 mt-0.5" />
                        )}
                        <span className={`text-sm ${feature.included ? 'text-sc-text-muted' : 'text-white/20'}`}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <Button
                    href={tier.ctaHref}
                    variant={tier.featured ? 'primary' : 'secondary'}
                    fullWidth
                  >
                    {tier.cta}
                  </Button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Shared benefits */}
        <FadeIn delay={0.3}>
          <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3">
            {sharedBenefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-2 text-sm text-sc-text-muted">
                <Check size={16} className="text-sc-green shrink-0" />
                {benefit}
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
