import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import FadeIn from '@/components/ui/FadeIn';
import Button from '@/components/ui/Button';
import { HardHat, Zap, ShieldCheck, Building2, TrendingUp, LayoutDashboard, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About — SheetCraft',
  description:
    'SheetCraft started on a job site, not in a Silicon Valley office. Professional spreadsheet templates built by builders, for builders.',
};

const philosophy = [
  {
    icon: HardHat,
    title: 'Field-tested, not lab-made',
    text: 'Every formula has been battle-tested on real projects. $50K kitchens. $8M commercial builds. If it breaks in the real world, it doesn\u2019t ship.',
  },
  {
    icon: Zap,
    title: 'Pro power, zero learning curve',
    text: 'You shouldn\u2019t need a YouTube tutorial to track your budget. Enter your numbers. Get your answers. That\u2019s it.',
  },
  {
    icon: ShieldCheck,
    title: 'One price. Yours forever.',
    text: 'No subscriptions. No feature gates. No \u201cupgrade to unlock.\u201d You buy it, you own it.',
  },
];

const stats = [
  { value: '2,000+', label: 'templates sold' },
  { value: '$50M+', label: 'in projects tracked' },
  { value: '4.9\u2605', label: 'average rating' },
  { value: '0', label: 'subscriptions' },
];

const audiences = [
  {
    icon: HardHat,
    title: 'General Contractors',
    text: 'From kitchen remodels to ground-up builds. Track costs, create professional estimates, win more bids.',
  },
  {
    icon: TrendingUp,
    title: 'Real Estate Investors',
    text: 'Analyze deals in minutes. Rental properties, flips, BRRRR \u2014 with the metrics that actually matter.',
  },
  {
    icon: Building2,
    title: 'Developers',
    text: 'Institutional-grade pro formas without the institutional price tag. LP/GP waterfalls included.',
  },
  {
    icon: LayoutDashboard,
    title: 'Project Managers',
    text: '77 CSI categories. Change order tracking. Draw schedules. The tools your $500K project deserves.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 lg:py-32 bg-navy">
        <Container className="max-w-3xl text-center">
          <FadeIn>
            <h1 className="font-heading font-semibold text-3xl lg:text-[48px] lg:leading-[56px] text-white mb-4">
              Built by builders.{' '}
              <span className="text-amber">Not by consultants.</span>
            </h1>
            <p className="text-lg lg:text-xl text-white/70 max-w-2xl mx-auto">
              We&rsquo;ve been in the field. That&rsquo;s why our templates actually work.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Origin Story */}
      <section className="py-16 lg:py-24 bg-white">
        <Container className="max-w-3xl">
          <FadeIn>
            <div className="space-y-6 text-base lg:text-lg text-slate leading-relaxed">
              <p>
                SheetCraft started on a job site. Not in a Silicon Valley office.
              </p>
              <p>
                Our founder spent 15&nbsp;years as a general contractor &mdash; managing
                budgets on sticky notes, tracking costs in spreadsheets that broke
                every time someone added a row, and watching good projects go
                sideways because the numbers didn&rsquo;t add up.
              </p>
              <p>
                After rebuilding his own spreadsheet system for the fifth time, he
                realized something: every contractor, every investor, every
                developer faces the same problem. They need professional-grade
                financial tools, but they can&rsquo;t justify $500/month software for a
                3-project portfolio.
              </p>
              <p className="text-navy font-medium">
                So he built what he wished existed. Templates that work the way
                builders actually think &mdash; not the way software engineers think
                builders should think.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Philosophy */}
      <section className="py-16 lg:py-24 bg-cloud">
        <Container>
          <FadeIn>
            <h2 className="font-heading font-semibold text-2xl lg:text-[32px] lg:leading-[40px] text-navy text-center mb-12">
              Our Philosophy
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8">
            {philosophy.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="text-center">
                  <item.icon size={36} className="text-amber mx-auto mb-4" />
                  <h3 className="font-heading font-semibold text-lg text-navy mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="py-16 lg:py-20 bg-white">
        <Container>
          <FadeIn>
            <h2 className="font-heading font-semibold text-2xl lg:text-[32px] lg:leading-[40px] text-navy text-center mb-12">
              Numbers That Matter
            </h2>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.08}>
                <div className="text-center">
                  <p className="font-heading font-semibold text-3xl lg:text-4xl text-navy">
                    {stat.value}
                  </p>
                  <p className="text-sm text-slate mt-1">{stat.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Who We Build For */}
      <section className="py-16 lg:py-24 bg-cloud">
        <Container>
          <FadeIn>
            <h2 className="font-heading font-semibold text-2xl lg:text-[32px] lg:leading-[40px] text-navy text-center mb-12">
              Who We Build For
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-6">
            {audiences.map((card, i) => (
              <FadeIn key={card.title} delay={i * 0.08}>
                <div className="bg-white rounded-lg p-6 border border-navy/8">
                  <div className="flex items-start gap-4">
                    <card.icon size={28} className="text-green shrink-0 mt-1" />
                    <div>
                      <h3 className="font-heading font-semibold text-base text-navy mb-1">
                        {card.title}
                      </h3>
                      <p className="text-sm text-slate leading-relaxed">
                        {card.text}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-navy">
        <Container className="max-w-2xl text-center">
          <FadeIn>
            <h2 className="font-heading font-semibold text-2xl lg:text-[32px] lg:leading-[40px] text-white mb-6">
              Ready to build with better numbers?
            </h2>
            <Button href="/products">Browse Templates — From $29</Button>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
