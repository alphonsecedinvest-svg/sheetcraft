'use client';

import { useState } from 'react';
import Container from '@/components/ui/Container';
import FadeIn from '@/components/ui/FadeIn';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'Can I find similar templates for free online?',
    answer: 'You can. We started with those too. Here\'s what you\'ll find: static budget lists with no change order tracking, rental calculators that forget vacancy and maintenance reserves, and formulas that break when you add a row. Our templates are built by a general contractor with 15 years in the field. Every formula is tested. Every edge case is handled. The difference between free and professional is the difference between "it looks right" and "it is right."',
  },
  {
    question: 'Is $49 expensive for a spreadsheet?',
    answer: 'That depends on what a bad decision costs you. Miss one change order? That\'s $10,000+. Overestimate cash flow on a rental? That property bleeds money for years. This template gives you the same analytical framework institutional investors use. It pays for itself the first time you use it — and you use it forever.',
  },
  {
    question: 'Can I just build my own?',
    answer: 'Absolutely. If you value your time at $50/hour, expect to spend about 20 hours building, testing, and debugging — that\'s $1,000 in time. Or you can download ours in 30 seconds and be productive in 5 minutes.',
  },
  {
    question: 'What versions of Excel are supported?',
    answer: 'Excel 2016 and later, including Microsoft 365. All formulas use standard functions — no macros, no VBA. Every template also works on Google Sheets (optimized, not just converted).',
  },
  {
    question: 'Can I customize the templates?',
    answer: 'Nothing is locked. Every cell, formula, and layout is fully editable. Add rows, change labels, adjust formulas. We include documentation explaining how key formulas work so you can modify them with confidence.',
  },
  {
    question: 'Will this work for my specific situation?',
    answer: 'Our templates handle everything from a $50K kitchen remodel to an $8M commercial build, from a single duplex to a 50-unit portfolio. The structure scales because it\'s built on how the industry actually works.',
  },
  {
    question: 'Do I get updates?',
    answer: 'For life. When we improve a template — new features, better formulas, updated tax references — you get the update free. We email you when updates are available.',
  },
  {
    question: 'Is this a subscription?',
    answer: 'No. One payment. Yours forever. No monthly fees, no renewals, no "your trial has expired."',
  },
  {
    question: 'Do you offer refunds?',
    answer: 'Yes — we offer a 30-day money-back guarantee. If the template doesn\'t work as described, you can\'t open or use the file, or you purchased the wrong product, we\'ll refund you in full. Since digital products can\'t be "returned," we ask that you briefly explain the issue so we can help. In most cases, we can resolve the problem faster than processing a refund. Just email support@sheetcraft.com.',
  },
  {
    question: 'I\'m not great with Excel. Can I still use these?',
    answer: 'Yes. Every template comes with a 5-minute video walkthrough. The templates are plug-and-play — enter your numbers, the formulas do the rest. No advanced Excel knowledge required.',
  },
  {
    question: 'Can I share these with my team?',
    answer: 'Each purchase covers one person or one business entity. Share freely within your team. Just don\'t redistribute or resell. Need a multi-team license? Email support@sheetcraft.com.',
  },
];

export default function FAQ({ items }: { items?: FAQItem[] }) {
  const faqItems = items || faqs;
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="py-12 lg:py-16 bg-white">
      <Container className="max-w-3xl">
        <FadeIn>
          <h2 className="font-heading font-semibold text-2xl lg:text-[32px] lg:leading-[40px] text-navy text-center mb-10">
            Questions? Answered.
          </h2>
        </FadeIn>

        <div className="space-y-2">
          {faqItems.map((faq, i) => (
            <FadeIn key={faq.question} delay={i * 0.05}>
              <div className="border border-navy/8 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-cloud/50 transition-colors"
                >
                  <span className="font-heading font-semibold text-base text-navy pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-slate shrink-0 transition-transform duration-200 ${
                      openIndex === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === i && (
                  <div className="px-4 pb-4">
                    <p className="text-sm text-slate leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}

export type { FAQItem };
