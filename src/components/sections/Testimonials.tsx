'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import FadeIn from '@/components/ui/FadeIn';
import { Star } from 'lucide-react';
import { stats } from '@/lib/constants';

const featured = {
  quote: 'I used the Construction Budget Tracker on a $1.8M custom home. Caught a **$23K** discrepancy in the framing sub\'s billing that I would have missed with my old spreadsheet. Paid for itself **400x** over.',
  name: 'Mike Ramirez',
  title: 'General Contractor, Austin, TX',
  initials: 'MR',
};

const testimonials = [
  {
    quote: 'The Rental Property Analyzer cut my analysis time from **two hours** to about **twenty minutes** per deal. The 10-year projection tab alone is worth the price.',
    name: 'Sarah Chen',
    title: 'Real Estate Investor, Charlotte, NC',
    initials: 'SC',
  },
  {
    quote: 'Showed the Gantt template to my project manager and he thought we\'d bought actual PM software. It\'s that clean.',
    name: 'Dan Kowalski',
    title: 'Owner, Kowalski Builds LLC, Denver, CO',
    initials: 'DK',
  },
  {
    quote: 'The Fix & Flip Analyzer forced me to account for holding costs I\'d been ignoring. My last flip\'s actual profit was within **3%** of what the template predicted.',
    name: 'Jessica Torres',
    title: 'Real Estate Investor, Tampa, FL',
    initials: 'JT',
  },
  {
    quote: 'I exported the Budget Tracker to PDF and my lender said it was the most professional submission he\'d seen from a small GC. **Loan approved in two days.**',
    name: 'Maria Gutierrez',
    title: 'General Contractor, Phoenix, AZ',
    initials: 'MG',
  },
  {
    quote: 'The BRRRR Calculator saved me from a terrible deal. Walked away and found a better property the next week.',
    name: 'Anthony Davis',
    title: 'Investor, Atlanta, GA',
    initials: 'AD',
  },
];

function formatQuote(quote: string) {
  const parts = quote.split(/\*\*(.+?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="text-sc-blue font-semibold">{part}</strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

function AnimatedStars({ count = 5, delay = 0 }: { count?: number; delay?: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(count)].map((_, j) => (
        <motion.div
          key={j}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: delay + j * 0.05, duration: 0.3 }}
        >
          <Star size={16} className="fill-sc-amber text-sc-amber" />
        </motion.div>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-16 lg:py-20 bg-sc-bg">
      <Container>
        <FadeIn>
          <h2 className="font-semibold text-2xl lg:text-[32px] lg:leading-[40px] tracking-[-0.02em] text-center mb-12 gradient-text">
            Don&apos;t take our word for it.
          </h2>
        </FadeIn>

        {/* Featured testimonial */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto mb-10"
        >
          <div className="bg-sc-card rounded-xl border border-sc-border shadow-elevated p-8 lg:p-10">
            <AnimatedStars delay={0.2} />
            <blockquote className="mt-4 text-xl lg:text-2xl text-sc-text leading-relaxed font-medium">
              &ldquo;{formatQuote(featured.quote)}&rdquo;
            </blockquote>
            <div className="mt-6 flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-sc-blue/10 flex items-center justify-center">
                <span className="text-sm font-bold text-sc-blue">{featured.initials}</span>
              </div>
              <div>
                <p className="font-semibold text-sm text-sc-text">{featured.name}</p>
                <p className="text-xs text-sc-text-muted">{featured.title}</p>
              </div>
              <span className="ml-auto text-xs text-sc-green font-medium">Verified Purchase</span>
            </div>
          </div>
        </motion.div>

        {/* Smaller testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.1}>
              <div className="bg-sc-card rounded-xl border border-sc-border shadow-card p-5 h-full flex flex-col transition-all duration-200 hover:shadow-elevated hover:-translate-y-1">
                <AnimatedStars delay={0.3 + i * 0.05} />
                <p className="mt-3 text-sm text-sc-text-muted leading-relaxed flex-1">
                  &ldquo;{formatQuote(t.quote)}&rdquo;
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-sc-blue/10 flex items-center justify-center">
                      <span className="text-xs font-bold text-sc-blue">{t.initials}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-sc-text">{t.name}</p>
                      <p className="text-xs text-sc-text-muted">{t.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Stats bar */}
        <FadeIn delay={0.5}>
          <div className="mt-12 flex flex-wrap justify-center gap-x-10 gap-y-4 py-6 border-t border-sc-border max-w-2xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-bold text-2xl lg:text-3xl text-sc-text font-mono">{stat.value}</p>
                <p className="text-sm text-sc-text-muted mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
