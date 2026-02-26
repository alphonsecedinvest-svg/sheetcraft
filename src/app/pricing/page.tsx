import type { Metadata } from 'next';
import Pricing from '@/components/sections/Pricing';
import FAQ from '@/components/sections/FAQ';
import FinalCTA from '@/components/sections/FinalCTA';
import StickyMobileCTA from '@/components/ui/StickyMobileCTA';
import Container from '@/components/ui/Container';
import { Check } from 'lucide-react';
import { products } from '@/lib/products';

export const metadata: Metadata = {
  title: 'Pricing — Simple, One-Time Payment',
  description: 'SheetCraft pricing: individual templates from $29, bundles from $99, or the full toolkit for $149. No subscriptions. Lifetime updates.',
};

const comparisonFeatures = [
  { name: 'Number of templates', single: '1', bundle: '3', full: 'All 5 + future' },
  { name: 'Excel + Google Sheets', single: true, bundle: true, full: true },
  { name: 'Quick Start Guides (PDF)', single: true, bundle: true, full: true },
  { name: 'Lifetime updates', single: true, bundle: true, full: true },
  { name: 'Priority email support', single: false, bundle: true, full: true },
  { name: 'Future templates included', single: false, bundle: false, full: true },
  { name: '30-day money-back guarantee', single: true, bundle: true, full: true },
];

export default function PricingPage() {
  return (
    <>
      <Pricing />

      {/* Comparison table */}
      <section className="py-12 lg:py-16 bg-sc-bg">
        <Container>
          <h2 className="font-semibold text-2xl lg:text-[32px] lg:leading-[40px] tracking-[-0.02em] text-center mb-10 gradient-text">
            Compare plans
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-sc-border">
                  <th className="text-left py-3 px-4 font-semibold text-sm text-sc-text-muted">Feature</th>
                  <th className="text-center py-3 px-4 font-semibold text-sm text-sc-text">Single</th>
                  <th className="text-center py-3 px-4 font-semibold text-sm text-sc-blue bg-sc-blue/5">Bundle</th>
                  <th className="text-center py-3 px-4 font-semibold text-sm text-sc-green">Full Toolkit</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature) => (
                  <tr key={feature.name} className="border-b border-sc-border/50">
                    <td className="py-3 px-4 text-sm text-sc-text-muted">{feature.name}</td>
                    {(['single', 'bundle', 'full'] as const).map((tier) => (
                      <td key={tier} className={`text-center py-3 px-4 ${tier === 'bundle' ? 'bg-sc-blue/5' : ''}`}>
                        {typeof feature[tier] === 'boolean' ? (
                          feature[tier] ? (
                            <Check size={18} className="inline text-sc-green" />
                          ) : (
                            <span className="text-sc-border">—</span>
                          )
                        ) : (
                          <span className="text-sm font-medium text-sc-text">{feature[tier]}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* All products list */}
          <div className="mt-16">
            <h2 className="font-semibold text-2xl text-center mb-8 gradient-text">
              What&apos;s in the Full Toolkit
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {products.map((p) => (
                <div key={p.slug} className="flex items-center gap-3 rounded-lg p-4 bg-sc-card border border-sc-border shadow-card">
                  <Check size={20} className="text-sc-green shrink-0" />
                  <div>
                    <p className="font-semibold text-sm text-sc-text">{p.name}</p>
                    <p className="text-xs text-sc-text-muted font-mono">${p.price} value</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-sc-text-muted mt-4">
              Total value: <strong className="text-sc-text font-mono">${products.reduce((sum, p) => sum + p.price, 0)}</strong> — yours for <strong className="text-sc-text">$149</strong>.{' '}
              <strong className="text-sc-green">Save $77 (34% off).</strong>
            </p>
          </div>
        </Container>
      </section>

      <FAQ />
      <FinalCTA />
      <StickyMobileCTA href="/pricing" label="Get Your Template" price="From $29" />
    </>
  );
}
