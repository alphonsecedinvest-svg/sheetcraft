'use client';

import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import MockupFrame from '@/components/ui/MockupFrame';
import FadeIn from '@/components/ui/FadeIn';
import MicroCopy from '@/components/ui/MicroCopy';
import { Star } from 'lucide-react';
import { trustLogos } from '@/lib/constants';

export default function Hero() {
  return (
    <section className="bg-cloud pt-12 pb-16 lg:pt-24 lg:pb-24">
      <Container>
        <div className="lg:grid lg:grid-cols-[55%_45%] lg:gap-12 lg:items-center">
          {/* Text */}
          <FadeIn>
            <div className="text-center lg:text-left">
              <h1 className="font-heading font-bold text-[32px] leading-[40px] lg:text-[48px] lg:leading-[56px] text-navy">
                Pro-grade analysis.{' '}
                <span className="text-amber">Zero learning curve.</span>
              </h1>
              <p className="mt-5 text-lg text-slate max-w-xl mx-auto lg:mx-0">
                The power of $500/month software in a spreadsheet you can use in 5 minutes. Professional Excel & Google Sheets templates for construction and real estate pros — no training required.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 items-center lg:justify-start justify-center">
                <Button href="/products" fullWidth className="sm:!w-auto">
                  Get Instant Access — From $29
                </Button>
                <Button href="/products" variant="ghost">
                  Preview Any Template →
                </Button>
              </div>
              {/* Micro-copy */}
              <MicroCopy className="mt-3 text-center lg:text-left" />
              {/* Micro social proof */}
              <div className="mt-5 flex items-center gap-1.5 justify-center lg:justify-start">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-amber text-amber" />
                  ))}
                </div>
                <span className="text-sm text-slate">4.9/5 from 200+ verified reviews · 2,000+ templates sold</span>
              </div>
            </div>
          </FadeIn>

          {/* Mockup */}
          <FadeIn delay={0.2} className="mt-10 lg:mt-0">
            <MockupFrame
              imageSrc="/images/products/hero-banner.jpg"
              imageAlt="SheetCraft professional spreadsheet templates"
            />
          </FadeIn>
        </div>

        {/* Trust bar */}
        <FadeIn delay={0.3}>
          <div className="mt-12 lg:mt-16 text-center">
            <p className="text-xs text-slate/60 uppercase tracking-wider font-medium mb-4">
              Trusted by teams at
            </p>
            <div className="flex items-center justify-center gap-8 flex-wrap">
              {trustLogos.map((logo) => (
                <span key={logo} className="text-sm font-heading font-semibold text-navy/30">
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
