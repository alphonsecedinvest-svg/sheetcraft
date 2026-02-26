import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { products, getProductBySlug, getProductImage } from '@/lib/products';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import MockupFrame from '@/components/ui/MockupFrame';
import TrustBadges from '@/components/ui/TrustBadges';
import MicroCopy from '@/components/ui/MicroCopy';
import ComparisonTable from '@/components/ui/ComparisonTable';
import StickyMobileCTA from '@/components/ui/StickyMobileCTA';
import FAQ from '@/components/sections/FAQ';
import FinalCTA from '@/components/sections/FinalCTA';
import { Star, Check, FileSpreadsheet, FileText, RefreshCw, BookOpen, Clock, GraduationCap, Laptop } from 'lucide-react';

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  return {
    title: `${product.name} — Professional Excel & Google Sheets Template`,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name} | SheetCraft`,
      description: product.shortDescription,
      type: 'website',
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.shortDescription,
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.rating,
      reviewCount: product.reviewCount,
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: product.faq.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="py-12 lg:py-16 bg-sc-bg">
        <Container>
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start">
            {/* Left: Image */}
            <MockupFrame
              className="mb-8 lg:mb-0"
              imageSrc={getProductImage(product.slug)}
              imageAlt={`${product.name} template preview`}
            />

            {/* Right: Info */}
            <div>
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                product.category === 'construction'
                  ? 'bg-sc-blue/10 text-sc-blue'
                  : 'bg-sc-green/10 text-sc-green'
              }`}>
                {product.category === 'construction' ? 'Construction' : 'Real Estate'}
              </span>

              <h1 className="mt-3 font-bold text-[28px] leading-[36px] lg:text-[40px] lg:leading-[48px] text-sc-text tracking-[-0.02em]">
                {product.name}
              </h1>

              <p className="mt-2 text-base text-sc-text-muted italic">{product.tagline}</p>

              <p className="mt-2 text-sm font-semibold text-sc-green">{product.benefitLine}</p>

              <div className="mt-4 flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-sc-amber text-sc-amber" />
                  ))}
                </div>
                <a href="#reviews" className="text-sm text-sc-text-muted hover:text-sc-text transition-colors cursor-pointer">{product.rating}/5 ({product.reviewCount} reviews)</a>
              </div>

              <div className="mt-4">
                <span className="font-bold text-[36px] text-sc-text font-mono">${product.price}</span>
                <span className="ml-2 text-sm text-sc-text-muted">one-time payment</span>
              </div>

              <div className="mt-6">
                <Button href={product.checkoutUrl} fullWidth className="lg:!w-auto">
                  Get Instant Access — ${product.price}
                </Button>
              </div>

              <TrustBadges variant="stacked" className="mt-4" />

              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  { icon: Clock, text: 'Ready in 5 min' },
                  { icon: GraduationCap, text: 'No training required' },
                  { icon: Laptop, text: 'Works in any Excel version' },
                ].map((badge) => (
                  <span
                    key={badge.text}
                    className="inline-flex items-center gap-1.5 bg-sc-green/10 text-sc-green text-xs font-medium px-3 py-1.5 rounded-full"
                  >
                    <badge.icon size={14} />
                    {badge.text}
                  </span>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  { icon: FileSpreadsheet, text: 'Excel + Google Sheets' },
                  { icon: FileText, text: 'Quick Start Guide (PDF)' },
                  { icon: RefreshCw, text: 'Lifetime updates' },
                  { icon: BookOpen, text: 'Quick-start guide' },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-2 text-sm text-sc-text-muted">
                    <item.icon size={16} className="text-sc-green shrink-0" />
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Description + Sidebar */}
      <section className="py-12 lg:py-16 bg-sc-bg-alt">
        <Container>
          <div className="lg:grid lg:grid-cols-[1fr_320px] lg:gap-12">
            <div>
              {product.problemSection && (
                <>
                  <h2 className="font-semibold text-2xl text-sc-text mb-6">The Problem</h2>
                  <div className="prose mb-10">
                    {product.problemSection.split('\n\n').map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </>
              )}

              {product.solutionSection && (
                <>
                  <h2 className="font-semibold text-2xl text-sc-text mb-6">The Solution</h2>
                  <div className="prose mb-10">
                    {product.solutionSection.split('\n\n').map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </>
              )}

              <h2 className="font-semibold text-2xl text-sc-text mt-10 mb-6">Features</h2>
              <ul className="space-y-3">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check size={18} className="text-sc-green shrink-0 mt-0.5" />
                    <span className="text-sm text-sc-text-muted">{feature}</span>
                  </li>
                ))}
              </ul>

              <h2 className="font-semibold text-2xl text-sc-text mt-10 mb-6">Who is this for?</h2>
              <ul className="space-y-3">
                {product.whoIsThisFor.map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <Check size={18} className="text-sc-amber shrink-0 mt-0.5" />
                    <span className="text-sm text-sc-text-muted">
                      <strong className="text-sc-text">{item.title}</strong> {item.description}
                    </span>
                  </li>
                ))}
              </ul>

              {product.objectionPreemption.length > 0 && (
                <>
                  <h2 className="font-semibold text-2xl text-sc-text mt-10 mb-6">Common questions about this template</h2>
                  <div className="space-y-6">
                    {product.objectionPreemption.map((obj) => (
                      <div key={obj.question}>
                        <p className="font-semibold text-base text-sc-text mb-2">
                          &ldquo;{obj.question}&rdquo;
                        </p>
                        <p className="text-sm text-sc-text-muted leading-relaxed">{obj.answer}</p>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Sidebar */}
            <aside className="mt-10 lg:mt-0">
              <div className="sticky top-20 rounded-xl p-6 bg-sc-card border border-sc-border shadow-elevated">
                <p className="font-semibold text-xs text-white bg-sc-blue inline-block px-3 py-1 rounded-full uppercase tracking-wide mb-3">
                  Most Popular Choice
                </p>
                <h3 className="font-semibold text-lg text-sc-text mb-1">
                  Full Toolkit — $149
                </h3>
                <p className="text-sm text-sc-text-muted line-through">$226</p>
                <p className="text-sm font-semibold text-sc-green mb-3">
                  Save $77 — that&apos;s 34% off
                </p>
                <p className="text-sm text-sc-text-muted mb-4">
                  Get all 5 templates for the price of 3.
                </p>
                <ul className="space-y-2 mb-5">
                  {['All 5 templates', 'Priority support', 'Every future template included free'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-sc-text-muted">
                      <Check size={16} className="text-sc-green" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button href="#" fullWidth>
                  Get the Full Toolkit — $149
                </Button>
                <p className="text-xs text-sc-text-muted text-center mt-3">
                  or continue with just this template for ${product.price}
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* Reviews */}
      {product.testimonials.length > 0 && (
        <section id="reviews" className="py-12 lg:py-16 bg-sc-bg scroll-mt-20">
          <Container>
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 mb-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="fill-sc-amber text-sc-amber" />
                  ))}
                </div>
              </div>
              <p className="font-bold text-lg text-sc-text">
                Rated {product.rating}/5 based on {product.reviewCount} reviews
              </p>
              <p className="text-sm text-sc-text-muted mt-1">Verified customer reviews</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
              {product.testimonials.map((t) => (
                <div key={t.name} className="rounded-lg p-5 bg-sc-card border border-sc-border shadow-card">
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={16} className="fill-sc-amber text-sc-amber" />
                    ))}
                  </div>
                  <p className="text-xs font-semibold text-sc-text-muted/60 mb-2">Verified Purchase</p>
                  <p className="text-base text-sc-text-muted leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-sc-blue/10 flex items-center justify-center">
                        <span className="text-xs font-bold text-sc-blue">{t.initials}</span>
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-sc-text">{t.name}</p>
                        <p className="text-xs text-sc-text-muted">{t.title}</p>
                      </div>
                    </div>
                    <span className="text-xs text-sc-green font-medium">Verified</span>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      <ComparisonTable category={product.category} />
      <FAQ items={product.faq.map((f) => ({ question: f.question, answer: f.answer }))} />
      <FinalCTA />
      <StickyMobileCTA
        href={product.checkoutUrl}
        label={`Get ${product.name}`}
        price={`$${product.price}`}
      />
    </>
  );
}
