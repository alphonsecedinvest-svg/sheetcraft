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
import { Star, Check, FileSpreadsheet, PlayCircle, RefreshCw, BookOpen, Clock, GraduationCap, Laptop } from 'lucide-react';

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

  // Schema.org Product markup
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
      <section className="py-12 lg:py-16 bg-cloud">
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
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-body font-medium ${
                product.category === 'construction'
                  ? 'bg-green/10 text-green'
                  : 'bg-amber/10 text-amber'
              }`}>
                {product.category === 'construction' ? 'Construction' : 'Real Estate'}
              </span>

              <h1 className="mt-3 font-heading font-bold text-[28px] leading-[36px] lg:text-[40px] lg:leading-[48px] text-navy">
                {product.name}
              </h1>

              <p className="mt-2 text-base text-slate italic">{product.tagline}</p>

              {/* Benefit line */}
              <p className="mt-2 text-sm font-semibold text-green">→ {product.benefitLine}</p>

              <div className="mt-4 flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-amber text-amber" />
                  ))}
                </div>
                <span className="text-sm text-slate">{product.rating}/5 ({product.reviewCount} reviews)</span>
              </div>

              <div className="mt-4">
                <span className="font-heading font-bold text-[36px] text-navy">${product.price}</span>
                <span className="ml-2 text-sm text-slate">one-time payment</span>
              </div>

              <div className="mt-6">
                <Button href={product.checkoutUrl} fullWidth className="lg:!w-auto">
                  Get Instant Access — ${product.price}
                </Button>
              </div>

              {/* Trust badges under CTA */}
              <TrustBadges variant="stacked" className="mt-4" />

              {/* Ease-of-use badges */}
              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  { icon: Clock, text: 'Ready in 5 min' },
                  { icon: GraduationCap, text: 'No training required' },
                  { icon: Laptop, text: 'Works in any Excel version' },
                ].map((badge) => (
                  <span
                    key={badge.text}
                    className="inline-flex items-center gap-1.5 bg-green/10 text-green text-xs font-medium px-3 py-1.5 rounded-full"
                  >
                    <badge.icon size={14} />
                    {badge.text}
                  </span>
                ))}
              </div>

              {/* What's included quick list */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  { icon: FileSpreadsheet, text: 'Excel + Google Sheets' },
                  { icon: PlayCircle, text: 'Video walkthrough' },
                  { icon: RefreshCw, text: 'Lifetime updates' },
                  { icon: BookOpen, text: 'Quick-start guide' },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-2 text-sm text-slate">
                    <item.icon size={16} className="text-green shrink-0" />
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Description + Sidebar */}
      <section className="py-12 lg:py-16 bg-white">
        <Container>
          <div className="lg:grid lg:grid-cols-[1fr_320px] lg:gap-12">
            <div>
              {/* Problem Section */}
              {product.problemSection && (
                <>
                  <h2 className="font-heading font-semibold text-2xl text-navy mb-6">The Problem</h2>
                  <div className="prose text-slate mb-10">
                    {product.problemSection.split('\n\n').map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </>
              )}

              {/* Solution Section */}
              {product.solutionSection && (
                <>
                  <h2 className="font-heading font-semibold text-2xl text-navy mb-6">The Solution</h2>
                  <div className="prose text-slate mb-10">
                    {product.solutionSection.split('\n\n').map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </>
              )}

              {/* Features */}
              <h2 className="font-heading font-semibold text-2xl text-navy mt-10 mb-6">Features</h2>
              <ul className="space-y-3">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check size={18} className="text-green shrink-0 mt-0.5" />
                    <span className="text-sm text-slate">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Who is this for */}
              <h2 className="font-heading font-semibold text-2xl text-navy mt-10 mb-6">Who is this for?</h2>
              <ul className="space-y-3">
                {product.whoIsThisFor.map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <Check size={18} className="text-amber shrink-0 mt-0.5" />
                    <span className="text-sm text-slate">
                      <strong className="text-navy">{item.title}</strong> {item.description}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Objection Preemption */}
              {product.objectionPreemption.length > 0 && (
                <>
                  <h2 className="font-heading font-semibold text-2xl text-navy mt-10 mb-6">Common questions about this template</h2>
                  <div className="space-y-6">
                    {product.objectionPreemption.map((obj) => (
                      <div key={obj.question}>
                        <p className="font-heading font-semibold text-base text-navy mb-2">
                          &ldquo;{obj.question}&rdquo;
                        </p>
                        <p className="text-sm text-slate leading-relaxed">{obj.answer}</p>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Sidebar: Bundle upsell */}
            <aside className="mt-10 lg:mt-0">
              <div className="sticky top-20 bg-cloud border border-navy/8 rounded-xl p-6">
                <p className="font-heading font-semibold text-xs text-white bg-amber inline-block px-3 py-1 rounded-full uppercase tracking-wide mb-3">
                  🔥 Most Popular Choice
                </p>
                <h3 className="font-heading font-semibold text-lg text-navy mb-1">
                  Full Toolkit — $149
                </h3>
                <p className="text-sm text-slate line-through">$226</p>
                <p className="text-sm font-semibold text-green mb-3">
                  Save $77 — that&apos;s 34% off
                </p>
                <p className="text-sm text-slate mb-4">
                  Get all 5 templates for the price of 3.
                </p>
                <ul className="space-y-2 mb-5">
                  {['All 5 templates', 'Priority support', 'Every future template included free'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate">
                      <Check size={16} className="text-green" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button href="#" fullWidth>
                  Get the Full Toolkit — $149
                </Button>
                <p className="text-xs text-slate text-center mt-3">
                  or continue with just this template for ${product.price}
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      {product.testimonials.length > 0 && (
        <section className="py-12 lg:py-16 bg-cloud">
          <Container>
            <h2 className="font-heading font-semibold text-2xl text-navy text-center mb-8">
              What customers say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {product.testimonials.map((t) => (
                <div key={t.name} className="bg-white border border-navy/6 rounded-xl p-6 shadow-card">
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={16} className="fill-amber text-amber" />
                    ))}
                  </div>
                  <p className="text-base text-navy italic leading-relaxed">
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
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Comparison Table */}
      <ComparisonTable category={product.category} />

      {/* FAQ */}
      <FAQ items={product.faq.map((f) => ({ question: f.question, answer: f.answer }))} />

      {/* Final CTA */}
      <FinalCTA />

      {/* Sticky Mobile CTA */}
      <StickyMobileCTA
        href={product.checkoutUrl}
        label={`Get ${product.name}`}
        price={`$${product.price}`}
      />
    </>
  );
}
