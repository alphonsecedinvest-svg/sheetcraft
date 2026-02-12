'use client';

import Container from '@/components/ui/Container';
import FadeIn from '@/components/ui/FadeIn';
import Button from '@/components/ui/Button';
import { Check, X } from 'lucide-react';

interface PricingTier {
  name: string;
  price: string;
  originalPrice?: string;
  period: string;
  description: string;
  features: { text: string; included: boolean }[];
  cta: string;
  ctaHref: string;
  featured: boolean;
  badge?: string;
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
      { text: 'Video walkthrough', included: true },
      { text: 'Lifetime updates', included: true },
      { text: 'Priority email support', included: false },
      { text: 'Future templates included', included: false },
    ],
    cta: 'Choose a Template',
    ctaHref: '/products',
    featured: false,
  },
  {
    name: 'Builder Bundle',
    price: '$99',
    originalPrice: '$127',
    period: 'one-time',
    description: '3 templates of your choice',
    features: [
      { text: '3 templates of your choice', included: true },
      { text: 'Excel + Google Sheets', included: true },
      { text: 'Video walkthroughs', included: true },
      { text: 'Lifetime updates', included: true },
      { text: 'Priority email support', included: true },
      { text: 'Future templates included', included: false },
    ],
    cta: 'Get the Bundle',
    ctaHref: '#',
    featured: true,
    badge: 'BEST VALUE',
  },
  {
    name: 'Full Toolkit',
    price: '$149',
    originalPrice: '$226',
    period: 'one-time',
    description: 'All 5 templates + future releases',
    features: [
      { text: 'All 5 templates', included: true },
      { text: 'Excel + Google Sheets', included: true },
      { text: 'Video walkthroughs', included: true },
      { text: 'Lifetime updates', included: true },
      { text: 'Priority email support', included: true },
      { text: 'Future templates included free', included: true },
    ],
    cta: 'Get Everything',
    ctaHref: '#',
    featured: false,
  },
];

const sharedBenefits = [
  'Lifetime updates — buy once, get every improvement',
  'Excel + Google Sheets — both formats included',
  'Video tutorial with every template',
  '30-day money-back guarantee — no questions asked',
];

export default function Pricing() {
  return (
    <section className="py-12 lg:py-16 bg-cloud">
      <Container>
        <FadeIn>
          <h2 className="font-heading font-semibold text-2xl lg:text-[32px] lg:leading-[40px] text-navy text-center mb-3">
            Simple pricing. No subscriptions.
          </h2>
        </FadeIn>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 items-stretch">
          {tiers.map((tier, i) => (
            <FadeIn key={tier.name} delay={i * 0.1}>
              <div className={`relative bg-white rounded-xl p-6 h-full flex flex-col ${
                tier.featured
                  ? 'border-2 border-amber shadow-featured lg:scale-[1.02]'
                  : 'border border-navy/8 shadow-card'
              }`}>
                {tier.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber text-white text-xs font-heading font-semibold px-4 py-1 rounded-full">
                    {tier.badge}
                  </div>
                )}

                <div className="text-center mb-6">
                  <p className="font-body font-medium text-sm uppercase text-slate tracking-wide">
                    {tier.name}
                  </p>
                  <div className="mt-3">
                    <span className="font-heading font-bold text-[40px] text-navy">{tier.price}</span>
                    {tier.originalPrice && (
                      <span className="ml-2 text-slate line-through text-lg">{tier.originalPrice}</span>
                    )}
                  </div>
                  <p className="text-sm text-slate mt-1">{tier.period}</p>
                </div>

                <div className="border-t border-navy/8 pt-4 flex-1">
                  <ul className="space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature.text} className="flex items-start gap-2.5">
                        {feature.included ? (
                          <Check size={18} className="text-green shrink-0 mt-0.5" />
                        ) : (
                          <X size={18} className="text-slate/30 shrink-0 mt-0.5" />
                        )}
                        <span className={`text-sm ${feature.included ? 'text-slate' : 'text-slate/40'}`}>
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
              <div key={benefit} className="flex items-center gap-2 text-sm text-slate">
                <Check size={16} className="text-green shrink-0" />
                {benefit}
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
