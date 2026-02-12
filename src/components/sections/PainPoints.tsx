'use client';

import Container from '@/components/ui/Container';
import FadeIn from '@/components/ui/FadeIn';

const painPoints = [
  '"I\'m tracking a $2M project in a spreadsheet I hacked together at 11pm — and praying nothing breaks."',
  '"I missed a $40K change order because my tracking was a mess. That\'s not a mistake I can make twice."',
  '"I spend every Sunday afternoon manually updating my rental portfolio tracker instead of finding my next deal."',
  '"I downloaded a free template online. Spent three hours fixing broken formulas. The cap rate calculation was wrong. How many bad decisions did I make before I noticed?"',
];

export default function PainPoints() {
  return (
    <section className="py-12 lg:py-16 bg-white">
      <Container className="max-w-3xl">
        <FadeIn>
          <h2 className="font-heading font-semibold text-2xl lg:text-[32px] lg:leading-[40px] text-navy text-center mb-10">
            This is costing you more than you think.
          </h2>
        </FadeIn>

        <div className="space-y-4">
          {painPoints.map((point, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="border-l-[3px] border-amber bg-cloud rounded-r-lg px-5 py-4">
                <p className="text-base text-navy font-medium italic">
                  😤 {point}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <p className="mt-10 text-center text-lg font-heading font-semibold text-navy">
            You&apos;re not bad at spreadsheets. You&apos;re just using the wrong one — and every day you do, it&apos;s costing you time, money, or both.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
