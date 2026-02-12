'use client';

import Container from '@/components/ui/Container';
import FadeIn from '@/components/ui/FadeIn';
import Button from '@/components/ui/Button';

const steps = [
  {
    number: '1',
    title: 'Choose your template',
    description: 'Browse our collection and pick the one that matches your project — construction management, rental analysis, fix & flip, or BRRRR.',
  },
  {
    number: '2',
    title: 'Download instantly',
    description: 'You\'ll get both Excel (.xlsx) and Google Sheets versions delivered to your inbox in seconds. No waiting. No subscriptions. Yours forever.',
  },
  {
    number: '3',
    title: 'Plug in your numbers',
    description: 'All formulas are pre-built and tested. Just enter your data and watch the dashboard come to life. Need help? Watch the included 5-minute video walkthrough.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-12 lg:py-16 bg-white">
      <Container className="max-w-3xl">
        <FadeIn>
          <h2 className="font-heading font-semibold text-2xl lg:text-[32px] lg:leading-[40px] text-navy text-center mb-10">
            Up and running in 3 steps
          </h2>
        </FadeIn>

        <div className="space-y-8">
          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 0.15}>
              <div className="flex gap-5 items-start">
                <span className="font-heading font-bold text-[40px] leading-none text-amber shrink-0 w-12">
                  {step.number}
                </span>
                <div>
                  <h3 className="font-heading font-semibold text-lg text-navy mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-10 text-center">
            <Button href="/products">
              Get Started — From $29
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
