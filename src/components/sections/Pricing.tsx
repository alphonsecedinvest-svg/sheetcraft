'use client';

import Container from '@/components/ui/Container';
import FadeIn from '@/components/ui/FadeIn';
import Button from '@/components/ui/Button';
import { Check, X, Shield, Zap, FileSpreadsheet, RefreshCw } from 'lucide-react';

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
  badgeColor?: string;
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
    badgeColor: 'bg-sc-blue text-white',
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
    badgeColor: 'bg-sc-green text-white',
    note: 'The one most contractors and investors pick.',
  },
];

const sharedBenefits = [
  { icon: Shield, text: '30-day money-back guarantee' },
  { icon: Zap, text: 'Instant download' },
  { icon: FileSpreadsheet, text: 'Excel + Google Sheets' },
  { icon: RefreshCw, text: 'Lifetime updates' },
];

export default function Pricing() {
  return (
    <section className="py-16 lg:py-20 bg-sc-bg-alt">
      <Container>
        <FadeIn>
          <h2 className="font-semibold text-2xl lg:text-[32px] lg:leading-[40px] tracking-[-0.02em] text-center mb-3 gradient-text">
            One payment. Yours forever.
          </h2>
          <p className="text-center text-sm text-sc-text-muted mb-2">Launch pricing — these prices won&apos;t last forever.</p>
        </FadeIn>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6 items-stretch">
          {tiers.map((tier, i) => (
            <FadeIn key={tier.name} delay={i * 0.1}>
              <div className={`relative rounded-xl p-6 h-full flex flex-col ${
                tier.featured
                  ? 'bg-sc-card border-2 border-sc-blue shadow-elevated lg:scale-[1.04]'
                  : 'bg-sc-card border border-sc-border shadow-card'
              }`}>
                {tier.badge && (
                  <div className={`absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold px-4 py-1 rounded-full ${tier.badgeColor || 'bg-sc-blue text-white'}`}>
                    {tier.badge}
                  </div>
                )}

                <div className="text-center mb-6">
                  <p className="font-medium text-sm uppercase text-sc-text-muted tracking-[0.05em]">
                    {tier.name}
                  </p>
                  <div className="mt-3">
                    <span className="font-bold text-[48px] leading-none text-sc-text font-mono">{tier.price}</span>
                    {tier.originalPrice && (
                      <span className="ml-2 text-sc-text-muted line-through text-lg">{tier.originalPrice}</span>
                    )}
                  </div>
                  {tier.savings && (
                    <span className="inline-block mt-2 text-xs font-semibold text-sc-green bg-sc-green/10 px-3 py-1 rounded-full">
                      {tier.savings}
                    </span>
                  )}
                  <p className="text-sm text-sc-text-muted mt-2">{tier.period}</p>
                  {tier.note && (
                    <p className="text-xs text-sc-amber font-medium mt-2 italic">{tier.note}</p>
                  )}
                </div>

                <div className="border-t border-sc-border pt-4 flex-1">
                  <ul className="space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature.text} className="flex items-start gap-2.5">
                        {feature.included ? (
                          <Check size={18} className="text-sc-green shrink-0 mt-0.5" />
                        ) : (
                          <X size={18} className="text-sc-border shrink-0 mt-0.5" />
                        )}
                        <span className={`text-sm ${feature.included ? 'text-sc-text-muted' : 'text-sc-text-muted/40'}`}>
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
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {sharedBenefits.map((benefit) => (
              <div key={benefit.text} className="flex flex-col items-center gap-2 text-center">
                <div className="w-10 h-10 rounded-lg bg-sc-card border border-sc-border flex items-center justify-center">
                  <benefit.icon size={18} className="text-sc-green" />
                </div>
                <span className="text-xs text-sc-text-muted">{benefit.text}</span>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Testimonial + Guarantee */}
        <FadeIn delay={0.4}>
          <div className="mt-10 max-w-2xl mx-auto text-center">
            <blockquote className="text-sm text-sc-text-muted italic leading-relaxed">
              &ldquo;Caught a $23K discrepancy on my first project. Paid for itself 400x over.&rdquo;
            </blockquote>
            <p className="mt-2 text-xs text-sc-text-muted font-medium">— Mike Ramirez, General Contractor, Austin, TX</p>

            <div className="mt-6 p-4 rounded-lg bg-sc-green/5 border border-sc-green/20">
              <p className="text-sm text-sc-text font-medium">
                30-day full refund. No questions asked.
              </p>
              <p className="text-xs text-sc-text-muted mt-1">
                Fewer than 10 refunds on 2,000+ sales.
              </p>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
