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
    quote: 'I analyze 15–20 rental deals a month. The Rental Property Analyzer cut my analysis time from two hours to about twenty minutes per deal. The 10-year projection tab alone is worth the price.',
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
  {
    quote: 'I\'ve been flipping houses for 8 years and never had a proper spreadsheet. The Fix & Flip Analyzer forced me to account for holding costs I\'d been ignoring. My last flip\'s actual profit was within 3% of what the template predicted.',
    name: 'Jessica Torres',
    title: 'Real Estate Investor, Tampa, FL',
    initials: 'JT',
  },
  {
    quote: 'My lender asked for a detailed project budget breakdown. I exported the Construction Budget Tracker to PDF and he said it was the most professional submission he\'d seen from a small GC. Loan approved in two days.',
    name: 'Maria Gutierrez',
    title: 'General Contractor, Phoenix, AZ',
    initials: 'MG',
  },
  {
    quote: 'The BRRRR Calculator saved me from a terrible deal. The numbers looked great until I plugged in realistic rehab costs and the refinance terms. Walked away and found a better property the next week.',
    name: 'Anthony Davis',
    title: 'Investor, Atlanta, GA',
    initials: 'AD',
  },
];

export default function Testimonials() {
  return (
    <section className="py-12 lg:py-16 bg-cloud">
      <Container>
        <FadeIn>
          <h2 className="font-heading font-semibold text-2xl lg:text-[32px] lg:leading-[40px] text-navy text-center mb-10">
            Don&apos;t take our word for it. Look at their numbers.
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.1}>
              <div className="bg-white border border-navy/6 rounded-xl p-6 shadow-card h-full flex flex-col">
                {/* Trustpilot-style green star bar */}
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <div key={j} className="w-6 h-6 bg-[#00b67a] flex items-center justify-center">
                      <Star size={14} className="fill-white text-white" />
                    </div>
                  ))}
                </div>
                <p className="text-sm font-semibold text-navy mb-2">Verified Purchase</p>
                <p className="text-base text-navy leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#00b67a]/10 flex items-center justify-center">
                      <span className="text-xs font-heading font-bold text-[#00b67a]">{t.initials}</span>
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-sm text-navy">{t.name}</p>
                      <p className="text-xs text-slate">{t.title}</p>
                    </div>
                  </div>
                  <span className="text-xs text-slate">✓ Verified</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Stats bar */}
        <FadeIn delay={0.6}>
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
