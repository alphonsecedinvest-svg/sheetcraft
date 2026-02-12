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
    question: 'What versions of Excel are supported?',
    answer: 'Our templates work with Excel 2016 and later (including Microsoft 365). All formulas use standard Excel functions — no macros or VBA required. If you\'re on Google Sheets, everything works there too.',
  },
  {
    question: 'Do these work on Google Sheets?',
    answer: 'Yes. Every purchase includes both an Excel (.xlsx) file and a Google Sheets version. They\'re not just converted — each version is optimized for its platform.',
  },
  {
    question: 'Can I customize the templates?',
    answer: 'Absolutely. Nothing is locked. Every cell, formula, and layout is fully editable. Add rows, change labels, adjust formulas — it\'s your spreadsheet. We include notes explaining how key formulas work so you can modify them confidently.',
  },
  {
    question: 'Do I get updates?',
    answer: 'Yes, for life. When we improve a template — new features, better formulas, updated tax references — you get the updated version free. We\'ll email you when updates are available.',
  },
  {
    question: 'Is this a subscription?',
    answer: 'No. You pay once and the templates are yours forever. No monthly fees, no annual renewals, no "your trial has expired" popups.',
  },
  {
    question: 'Do you offer refunds?',
    answer: 'Yes. We offer a 30-day money-back guarantee, no questions asked. If the templates don\'t work for you, email us and we\'ll refund you in full.',
  },
  {
    question: 'Can I use one template on multiple projects?',
    answer: 'Yes. There are no per-project limits. Use your template on as many projects as you want. Make copies, rename them, share them with your team.',
  },
  {
    question: 'I\'m not very experienced with Excel. Will I be able to use these?',
    answer: 'Yes. Every template comes with a video walkthrough that shows you exactly how to use it. The templates are designed to be plug-and-play — you enter your numbers and the formulas do the rest. No advanced Excel knowledge required.',
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
            Frequently asked questions
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
