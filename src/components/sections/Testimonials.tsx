'use client';

import Container from '@/components/ui/Container';
import FadeIn from '@/components/ui/FadeIn';
import { Star } from 'lucide-react';
import { stats } from '@/lib/constants';

const testimonials = [
  {
    quote: 'I used the Construction Budget Tracker on a $1.8M custom home. Caught a $23K discrepancy in the framing sub\'s billing that I would have missed with my old spreadsheet. Paid for itself 400x over.',
    name: 'Mike Ramirez',
    title: 'General Contractor, Austin, TX',
    initials: 'MR',
  },
  {
    quote: 'I analyze 15-20 rental deals a month. The Rental Property Analyzer cut my analysis time from two hours to about twenty minutes per deal. The 10-year projection tab alone is worth the price.',
    name: 'Sarah Chen',
    title: 'Real Estate Investor, Charlotte, NC',
    initials: 'SC',
  },
  {
    quote: 'Showed the Gantt template to my project manager and he thought we\'d bought actual PM software. It\'s that clean. We use it on every job now.',
    name: 'Dan Kowalski',
    title: 'Owner, Kowalski Builds LLC, Denver, CO',
    initials: 'DK',
  },
];

export default function Testimonials() {
  return (
    <section className="py-12 lg:py-16 bg-cloud">
      <Container>
        <FadeIn>
          <h2 className="font-heading font-semibold text-2xl lg:text-[32px] lg:leading-[40px] text-navy text-center mb-10">
            What contractors & investors say
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.1}>
              <div className="bg-white border border-navy/6 rounded-xl p-6 shadow-card h-full flex flex-col">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} className="fill-amber text-amber" />
                  ))}
                </div>
                <p className="text-base text-navy italic leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-cloud flex items-center justify-center">
                    <span className="text-xs font-heading font-semibold text-navy">{t.initials}</span>
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-sm text-navy">{t.name}</p>
                    <p className="text-xs text-slate">{t.title}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Stats bar */}
        <FadeIn delay={0.3}>
          <div className="mt-12 grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-heading font-bold text-2xl lg:text-3xl text-navy">{stat.value}</p>
                <p className="text-sm text-slate mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
