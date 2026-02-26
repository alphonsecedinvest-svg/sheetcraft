'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Container from '@/components/ui/Container';
import FadeIn from '@/components/ui/FadeIn';
import { AlertTriangle, DollarSign, Clock, XCircle } from 'lucide-react';

const painPoints = [
  {
    icon: DollarSign,
    amount: 23000,
    display: '$23K',
    label: 'missed on one project',
    quote: 'I\'m tracking a $2M project in a spreadsheet I hacked together at 11pm — and praying nothing breaks.',
  },
  {
    icon: AlertTriangle,
    amount: 40000,
    display: '$40K',
    label: 'lost to a missed change order',
    quote: 'I missed a $40K change order because my tracking was a mess. That\'s not a mistake I can make twice.',
  },
  {
    icon: Clock,
    amount: 520,
    display: '520hrs',
    label: 'wasted per year on manual updates',
    quote: 'I spend every Sunday afternoon manually updating my rental portfolio tracker instead of finding my next deal.',
  },
  {
    icon: XCircle,
    amount: 100,
    display: '100%',
    label: 'of free templates had broken formulas',
    quote: 'I downloaded a free template online. Spent three hours fixing broken formulas. The cap rate calculation was wrong.',
  },
];

function CountUp({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;

    const duration = 1200;
    const steps = 40;
    const increment = target / steps;
    const stepTime = duration / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(Math.round(increment * step), target);
      setCount(current);
      if (step >= steps) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, target]);

  if (suffix === 'hrs') return <>{count.toLocaleString()}hrs</>;
  if (suffix === '%') return <>{count}%</>;
  if (target >= 1000) return <>${Math.round(count / 1000)}K</>;
  return <>${count.toLocaleString()}</>;
}

export default function PainPoints() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section className="relative py-16 lg:py-20 bg-sc-bg" ref={sectionRef}>
      {/* Subtle graph-paper grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <Container className="relative max-w-3xl">
        <FadeIn>
          <h2 className="font-semibold text-2xl lg:text-[32px] lg:leading-[40px] tracking-[-0.02em] text-center mb-12 gradient-text">
            This is costing you more than you think.
          </h2>
        </FadeIn>

        <div className="space-y-4">
          {painPoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20, y: 10 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              style={{ marginLeft: `${i * 12}px` }}
            >
              <div className="bg-sc-card rounded-xl border border-sc-border border-l-[3px] border-l-sc-red shadow-card p-5 transition-all duration-200 hover:shadow-elevated hover:-translate-y-0.5">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-sc-red/10 flex items-center justify-center">
                    <point.icon size={20} className="text-sc-red" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-2 mb-1.5">
                      <span className="font-mono font-bold text-2xl lg:text-3xl text-sc-red tracking-tight">
                        <CountUp
                          target={point.amount}
                          suffix={point.display.includes('hrs') ? 'hrs' : point.display.includes('%') ? '%' : '$'}
                          inView={isInView}
                        />
                      </span>
                      <span className="text-sm text-sc-text-muted">{point.label}</span>
                    </div>
                    <p className="text-sm text-sc-text-muted italic leading-relaxed">
                      &ldquo;{point.quote}&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <FadeIn delay={0.7}>
          <p className="mt-12 text-center text-lg font-semibold text-sc-text">
            You&apos;re not bad at spreadsheets. You&apos;re just using the wrong one — and every day you do, it&apos;s costing you time, money, or both.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
