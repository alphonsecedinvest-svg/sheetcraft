'use client';

import Container from '@/components/ui/Container';
import FadeIn from '@/components/ui/FadeIn';
import Button from '@/components/ui/Button';
import MicroCopy from '@/components/ui/MicroCopy';

const steps = [
  {
    number: '1',
    title: 'Pick your template',
    description: 'Construction budget? Rental analysis? Fix & flip? Choose the one that matches your project. Not sure? Start with the Full Toolkit — you\'ll use them all.',
  },
  {
    number: '2',
    title: 'Download instantly',
    description: 'Both Excel (.xlsx) and Google Sheets versions hit your inbox in seconds. No waiting. No subscriptions. Yours forever.',
  },
  {
    number: '3',
    title: 'Plug in your numbers and go',
    description: 'Every formula is pre-built and tested. Enter your data. Watch the dashboard calculate. Need help? The included 5-minute video walkthrough covers everything.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-12 lg:py-16 bg-white">
      <Container className="max-w-3xl">
        <FadeIn>
          <h2 className="font-heading font-semibold text-2xl lg:text-[32px] lg:leading-[40px] text-navy text-center mb-10">
            Up and running in 3 steps. Under 5 minutes.
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
              Get Instant Access — From $29
            </Button>
            <MicroCopy className="mt-3" />
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
