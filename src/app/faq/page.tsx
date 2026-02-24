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
      <section className="py-16 lg:py-24 bg-sc-bg">
        <Container className="max-w-3xl text-center">
          <FadeIn>
            <h1 className="font-semibold text-3xl lg:text-[44px] lg:leading-[52px] tracking-[-0.05em] text-white mb-4 gradient-text">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-sc-text-muted max-w-xl mx-auto">
              Everything you need to know about SheetCraft templates
            </p>
          </FadeIn>
        </Container>
      </section>

      <FAQ />

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-sc-bg-alt">
        <Container className="max-w-2xl text-center">
          <FadeIn>
            <p className="text-lg text-sc-text-muted">
              Still have questions?{' '}
              <a
                href="mailto:support@sheetcraft.com"
                className="text-white font-medium underline underline-offset-[3px] hover:text-sc-text-muted transition-colors"
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
