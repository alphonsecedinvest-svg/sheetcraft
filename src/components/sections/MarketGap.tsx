'use client';

import Container from '@/components/ui/Container';
import FadeIn from '@/components/ui/FadeIn';
import { X, Check, AlertTriangle } from 'lucide-react';

const columns = [
  {
    label: 'Free Templates',
    emoji: '😬',
    color: 'border-red-200 bg-red-50/50',
    headerColor: 'text-red-500',
    points: [
      { icon: 'x', text: 'Broken formulas you discover too late' },
      { icon: 'x', text: 'Basic — missing key calculations' },
      { icon: 'x', text: 'No documentation or support' },
      { icon: 'x', text: 'Hours spent fixing & customizing' },
    ],
    verdict: 'Cheap, but you pay with your time (and mistakes).',
  },
  {
    label: 'SheetCraft',
    emoji: '✅',
    color: 'border-amber bg-amber/5 ring-2 ring-amber/30',
    headerColor: 'text-amber',
    highlight: true,
    points: [
      { icon: 'check', text: 'Tested formulas — zero broken refs' },
      { icon: 'check', text: 'Pro-grade analysis & dashboards' },
      { icon: 'check', text: 'Ready in 5 minutes, no training' },
      { icon: 'check', text: '$29–$79 one-time, lifetime updates' },
    ],
    verdict: 'All the power. None of the complexity.',
  },
  {
    label: 'Pro Software',
    emoji: '😵',
    color: 'border-slate/20 bg-slate/5',
    headerColor: 'text-slate',
    points: [
      { icon: 'warn', text: 'Steep learning curve (weeks)' },
      { icon: 'warn', text: 'Powerful but overly complex' },
      { icon: 'x', text: '$200–$500/month subscriptions' },
      { icon: 'x', text: 'Locked into their ecosystem' },
    ],
    verdict: 'Great if you have a team and a training budget.',
  },
];

function PointIcon({ icon }: { icon: string }) {
  if (icon === 'check') return <Check size={16} className="text-green shrink-0" />;
  if (icon === 'warn') return <AlertTriangle size={16} className="text-amber shrink-0" />;
  return <X size={16} className="text-red-400 shrink-0" />;
}

export default function MarketGap() {
  return (
    <section className="py-12 lg:py-16 bg-cloud">
      <Container>
        <FadeIn>
          <h2 className="font-heading font-semibold text-2xl lg:text-[32px] lg:leading-[40px] text-navy text-center mb-3">
            There&apos;s a gap in the market. We fill it.
          </h2>
          <p className="text-center text-slate text-base max-w-2xl mx-auto mb-10">
            Free templates are too basic. Pro software is too expensive and complex.
            SheetCraft gives you institutional-grade analysis in a tool you already know — Excel or Google Sheets.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {columns.map((col, i) => (
            <FadeIn key={col.label} delay={i * 0.1}>
              <div
                className={`rounded-xl border p-6 h-full flex flex-col ${col.color} ${
                  col.highlight ? 'relative scale-[1.02] shadow-lg' : ''
                }`}
              >
                {col.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber text-white text-xs font-body font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                    Best Value
                  </span>
                )}
                <div className="text-center mb-5">
                  <span className="text-3xl">{col.emoji}</span>
                  <h3 className={`font-heading font-semibold text-lg mt-2 ${col.headerColor}`}>
                    {col.label}
                  </h3>
                </div>

                <ul className="space-y-3 flex-1">
                  {col.points.map((point) => (
                    <li key={point.text} className="flex items-start gap-2">
                      <PointIcon icon={point.icon} />
                      <span className="text-sm text-navy">{point.text}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-5 pt-4 border-t border-navy/10 text-sm text-slate italic text-center">
                  {col.verdict}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <p className="mt-10 text-center text-lg font-heading font-semibold text-navy max-w-2xl mx-auto">
            Think of it as what Apple did for personal computers: we took the power of complex professional tools
            and made them accessible to everyone.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
