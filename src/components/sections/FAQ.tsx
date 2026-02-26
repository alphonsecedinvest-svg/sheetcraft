'use client';

import { useState, useRef, useEffect } from 'react';
import Container from '@/components/ui/Container';
import FadeIn from '@/components/ui/FadeIn';
import { ChevronDown, DollarSign, Clock, Shield, FileSpreadsheet, Settings, Scaling } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQItemWithIcon extends FAQItem {
  icon: LucideIcon;
}

const faqs: FAQItemWithIcon[] = [
  {
    icon: DollarSign,
    question: 'Is $49 expensive for a spreadsheet?',
    answer: 'Miss one change order? That\'s $10,000+. This template pays for itself the first time you use it — and you use it forever.',
  },
  {
    icon: Clock,
    question: 'Can I just build my own?',
    answer: 'At $50/hour, expect 20+ hours building, testing, and debugging — $1,000 in time. Or download ours in 30 seconds.',
  },
  {
    icon: FileSpreadsheet,
    question: 'What versions of Excel are supported?',
    answer: 'Excel 2016+, Microsoft 365, and Google Sheets. Standard functions only — no macros, no VBA.',
  },
  {
    icon: Settings,
    question: 'Can I customize the templates?',
    answer: 'Nothing is locked. Every cell, formula, and layout is fully editable. Documentation included.',
  },
  {
    icon: Shield,
    question: 'Do you offer refunds?',
    answer: 'Yes — 30-day money-back guarantee, no questions asked. Email support@sheetcraft.com.',
  },
  {
    icon: Scaling,
    question: 'Will this work for my situation?',
    answer: 'From a $50K kitchen remodel to an $8M commercial build, from a single duplex to a 50-unit portfolio.',
  },
];

// Full FAQ list for the dedicated FAQ page (more comprehensive)
const fullFaqs: FAQItem[] = [
  {
    question: 'Can I find similar templates for free online?',
    answer: 'You can. We started with those too. Here\'s what you\'ll find: static budget lists with no change order tracking, rental calculators that forget vacancy and maintenance reserves, and formulas that break when you add a row. Our templates are built by a general contractor with 15 years in the field. Every formula is tested. Every edge case is handled.',
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
    answer: 'Yes — we offer a 30-day money-back guarantee. If the template doesn\'t work as described, you can\'t open or use the file, or you purchased the wrong product, we\'ll refund you in full. Just email support@sheetcraft.com.',
  },
  {
    question: 'I\'m not great with Excel. Can I still use these?',
    answer: 'Yes. Every template comes with a detailed Quick Start Guide (PDF). The templates are plug-and-play — enter your numbers, the formulas do the rest. No advanced Excel knowledge required.',
  },
  {
    question: 'Can I share these with my team?',
    answer: 'Each purchase covers one person or one business entity. Share freely within your team. Just don\'t redistribute or resell. Need a multi-team license? Email support@sheetcraft.com.',
  },
];

function AccordionItem({
  faq,
  isOpen,
  onToggle,
  icon: Icon,
}: {
  faq: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
  icon?: LucideIcon;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen]);

  return (
    <div className={`rounded-lg overflow-hidden transition-all duration-200 ${
      isOpen ? 'bg-sc-card shadow-card border border-sc-border' : 'border border-transparent'
    }`}>
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-3 p-4 text-left hover:bg-sc-bg-alt/50 transition-colors"
      >
        {Icon && (
          <Icon
            size={18}
            className={`shrink-0 transition-transform duration-300 ${
              isOpen ? 'text-sc-blue rotate-45' : 'text-sc-text-muted'
            }`}
          />
        )}
        <span className="font-semibold text-base text-sc-text pr-4 flex-1">
          {faq.question}
        </span>
        <ChevronDown
          size={18}
          className={`text-sc-text-muted shrink-0 transition-transform duration-300 ease-out ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className="overflow-hidden transition-[max-height] duration-300 ease-out"
        style={{ maxHeight: isOpen ? `${height}px` : '0px' }}
      >
        <div ref={contentRef} className="px-4 pb-4 pl-11">
          <p className="text-sm text-sc-text-muted leading-relaxed">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ({ items }: { items?: FAQItem[] }) {
  const useCustomItems = !!items;
  const [openIndex, setOpenIndex] = useState<number>(0);

  // When custom items are passed, use them with no icons
  if (useCustomItems) {
    return (
      <section className="py-16 lg:py-20 bg-sc-bg">
        <Container className="max-w-3xl">
          <FadeIn>
            <h2 className="font-semibold text-2xl lg:text-[32px] lg:leading-[40px] tracking-[-0.02em] text-center mb-10 gradient-text">
              Questions? Answered.
            </h2>
          </FadeIn>

          <div className="space-y-2">
            {items.map((faq, i) => (
              <FadeIn key={faq.question} delay={i * 0.05}>
                <AccordionItem
                  faq={faq}
                  isOpen={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
                />
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="py-16 lg:py-20 bg-sc-bg">
      <Container className="max-w-3xl">
        <FadeIn>
          <h2 className="font-semibold text-2xl lg:text-[32px] lg:leading-[40px] tracking-[-0.02em] text-center mb-10 gradient-text">
            Questions? Answered.
          </h2>
        </FadeIn>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <FadeIn key={faq.question} delay={i * 0.05}>
              <AccordionItem
                faq={faq}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
                icon={faq.icon}
              />
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <p className="mt-8 text-center text-sm text-sc-text-muted">
            Have another question?{' '}
            <a
              href="mailto:support@sheetcraft.com"
              className="text-sc-blue font-medium underline underline-offset-2 hover:text-sc-blue/80 transition-colors"
            >
              support@sheetcraft.com
            </a>
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}

export { fullFaqs };
export type { FAQItem };
