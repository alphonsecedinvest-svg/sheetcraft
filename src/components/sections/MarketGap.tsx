'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import FadeIn from '@/components/ui/FadeIn';
import { X, Check, AlertTriangle } from 'lucide-react';

const columns = [
  {
    label: 'Free Templates',
    headerColor: 'text-sc-red',
    muted: true,
    points: [
      { icon: 'x' as const, text: 'Broken formulas you discover too late' },
      { icon: 'x' as const, text: 'Basic — missing key calculations' },
      { icon: 'x' as const, text: 'No documentation or support' },
      { icon: 'x' as const, text: 'Hours spent fixing & customizing' },
    ],
    verdict: 'Cheap, but you pay with your time (and mistakes).',
  },
  {
    label: 'SheetCraft',
    headerColor: 'text-sc-green',
    highlight: true,
    muted: false,
    points: [
      { icon: 'check' as const, text: 'Tested formulas — zero broken refs' },
      { icon: 'check' as const, text: 'Pro-grade analysis & dashboards' },
      { icon: 'check' as const, text: 'Ready in 5 minutes, no training' },
      { icon: 'check' as const, text: '$29–$79 one-time, lifetime updates' },
    ],
    verdict: 'All the power. None of the complexity.',
  },
  {
    label: 'Pro Software',
    headerColor: 'text-sc-text-muted',
    muted: true,
    points: [
      { icon: 'warn' as const, text: 'Steep learning curve (weeks)' },
      { icon: 'warn' as const, text: 'Powerful but overly complex' },
      { icon: 'x' as const, text: '$200–$500/month subscriptions' },
      { icon: 'x' as const, text: 'Locked into their ecosystem' },
    ],
    verdict: 'Great if you have a team and a training budget.',
  },
];

function PointIcon({ icon }: { icon: 'check' | 'warn' | 'x' }) {
  if (icon === 'check') return <Check size={16} className="text-sc-green shrink-0" />;
  if (icon === 'warn') return <AlertTriangle size={16} className="text-sc-amber shrink-0" />;
  return <X size={16} className="text-sc-red shrink-0" />;
}

export default function MarketGap() {
  return (
    <section className="py-16 lg:py-20 bg-sc-bg-alt">
      <Container>
        <FadeIn>
          <h2 className="font-semibold text-2xl lg:text-[32px] lg:leading-[40px] tracking-[-0.02em] text-center mb-3 gradient-text">
            There&apos;s a gap in the market. We fill it.
          </h2>
          <p className="text-center text-sc-text-muted text-base max-w-2xl mx-auto mb-12">
            Free templates are too basic. Pro software is too expensive and complex.
            SheetCraft gives you institutional-grade analysis in a tool you already know.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto items-stretch">
          {columns.map((col, i) => (
            <motion.div
              key={col.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.6,
                delay: col.highlight ? 0.3 : i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={col.muted ? 'opacity-75' : ''}
            >
              <div
                className={`relative rounded-xl p-6 h-full flex flex-col transition-all duration-300 ${
                  col.highlight
                    ? 'bg-sc-card border-2 border-sc-blue shadow-elevated scale-[1.03] md:scale-105 hover:shadow-[0_0_30px_rgba(37,99,235,0.12)]'
                    : 'bg-sc-card border border-sc-border shadow-card'
                }`}
              >
                {col.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-sc-blue text-white text-xs font-semibold px-4 py-1 rounded-full uppercase tracking-wide">
                    Recommended
                  </span>
                )}

                <div className="text-center mb-5">
                  <h3 className={`font-semibold text-lg ${col.headerColor}`}>
                    {col.label}
                  </h3>
                </div>

                <ul className="space-y-3 flex-1">
                  {col.points.map((point) => (
                    <li key={point.text} className="flex items-start gap-2">
                      <PointIcon icon={point.icon} />
                      <span className="text-sm text-sc-text-muted">{point.text}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-5 pt-4 border-t border-sc-border text-sm text-sc-text-muted italic text-center">
                  {col.verdict}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <FadeIn delay={0.5}>
          <p className="mt-12 text-center text-lg font-semibold text-sc-text max-w-2xl mx-auto">
            Think of it as what Apple did for personal computers: we took the power of complex professional tools
            and made them accessible to everyone.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
