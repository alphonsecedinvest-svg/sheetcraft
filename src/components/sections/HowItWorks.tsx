'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Container from '@/components/ui/Container';
import FadeIn from '@/components/ui/FadeIn';
import Button from '@/components/ui/Button';
import MicroCopy from '@/components/ui/MicroCopy';
import { MousePointerClick, Download, BarChart3 } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MousePointerClick,
    title: 'Pick your template',
    description: 'Construction budget? Rental analysis? Fix & flip? Choose the one that matches your project.',
  },
  {
    number: '02',
    icon: Download,
    title: 'Download instantly',
    description: 'Excel + Google Sheets versions hit your inbox in seconds. No waiting. Yours forever.',
  },
  {
    number: '03',
    icon: BarChart3,
    title: 'Plug in and go',
    description: 'Enter your data. Watch the dashboard calculate. The Quick Start Guide walks you through everything.',
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.8', 'end 0.6'],
  });
  const lineWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section ref={sectionRef} className="py-16 lg:py-20 bg-sc-bg-alt">
      <Container>
        <FadeIn>
          <h2 className="font-semibold text-2xl lg:text-[32px] lg:leading-[40px] tracking-[-0.02em] text-center mb-14 gradient-text">
            Up and running in 3 steps
          </h2>
        </FadeIn>

        {/* Desktop: horizontal */}
        <div className="hidden lg:block">
          {/* Progress line */}
          <div className="relative mx-auto max-w-3xl mb-12">
            <div className="h-0.5 bg-sc-border rounded-full" />
            <motion.div
              className="absolute top-0 left-0 h-0.5 bg-sc-blue rounded-full"
              style={{ width: lineWidth }}
            />
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
            {steps.map((step, i) => (
              <FadeIn key={step.number} delay={i * 0.15}>
                <div className="relative text-center">
                  {/* Watermark number */}
                  <span className="absolute -top-12 left-1/2 -translate-x-1/2 font-mono font-bold text-[80px] leading-none text-sc-text/[0.04] select-none pointer-events-none">
                    {step.number}
                  </span>

                  <div className="relative">
                    <div className="w-14 h-14 rounded-xl bg-sc-card border border-sc-border shadow-card flex items-center justify-center mx-auto mb-4">
                      <step.icon size={24} className="text-sc-blue" />
                    </div>
                    <h3 className="font-semibold text-lg text-sc-text mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-sc-text-muted leading-relaxed max-w-xs mx-auto">
                      {step.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Mobile: vertical */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 0.15}>
              <div className="flex gap-4 items-start">
                <div className="shrink-0 flex flex-col items-center gap-1.5">
                  <span className="font-mono font-bold text-xs text-sc-blue">
                    {step.number}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-sc-card border border-sc-border shadow-card flex items-center justify-center">
                    <step.icon size={20} className="text-sc-blue" />
                  </div>
                </div>
                <div className="pt-5">
                  <h3 className="font-semibold text-lg text-sc-text mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-sc-text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-12 text-center">
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
