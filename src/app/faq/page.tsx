import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import FadeIn from '@/components/ui/FadeIn';
import FAQ from '@/components/sections/FAQ';

export const metadata: Metadata = {
  title: 'FAQ — SheetCraft',
  description:
    'Everything you need to know about SheetCraft professional Excel and Google Sheets templates for construction and real estate.',
};

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-cloud">
        <Container className="max-w-3xl text-center">
          <FadeIn>
            <h1 className="font-heading font-semibold text-3xl lg:text-[44px] lg:leading-[52px] text-navy mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-slate max-w-xl mx-auto">
              Everything you need to know about SheetCraft templates
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* FAQ Component */}
      <FAQ />

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-cloud">
        <Container className="max-w-2xl text-center">
          <FadeIn>
            <p className="text-lg text-slate">
              Still have questions?{' '}
              <a
                href="mailto:support@sheetcraft.com"
                className="text-amber font-medium underline underline-offset-[3px] hover:text-amber-hover transition-colors"
              >
                Email support@sheetcraft.com
              </a>
            </p>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
