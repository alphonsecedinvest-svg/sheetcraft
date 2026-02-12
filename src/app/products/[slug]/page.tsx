import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { products, getProductBySlug } from '@/lib/products';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import MockupFrame from '@/components/ui/MockupFrame';
import FAQ from '@/components/sections/FAQ';
import FinalCTA from '@/components/sections/FinalCTA';
import { Star, Check, FileSpreadsheet, PlayCircle, RefreshCw, BookOpen } from 'lucide-react';

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
            <MockupFrame className="mb-8 lg:mb-0" />

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
                  Get This Template — ${product.price}
                </Button>
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

      {/* Description */}
      <section className="py-12 lg:py-16 bg-white">
        <Container>
          <div className="lg:grid lg:grid-cols-[1fr_320px] lg:gap-12">
            <div>
              <h2 className="font-heading font-semibold text-2xl text-navy mb-6">About this template</h2>
              <div className="prose text-slate">
                {product.description.split('\n\n').map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

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
            </div>

            {/* Sidebar: Bundle upsell */}
            <aside className="mt-10 lg:mt-0">
              <div className="sticky top-20 bg-cloud border border-navy/8 rounded-xl p-6">
                <p className="font-heading font-semibold text-sm text-amber uppercase tracking-wide mb-2">
                  Save with a bundle
                </p>
                <h3 className="font-heading font-semibold text-lg text-navy mb-3">
                  Full Toolkit — $149
                </h3>
                <p className="text-sm text-slate mb-4">
                  Get all 5 templates plus future releases. Save over $75 compared to buying individually.
                </p>
                <ul className="space-y-2 mb-5">
                  {['All 5 templates', 'Priority support', 'Future templates free'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate">
                      <Check size={16} className="text-green" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button href="/pricing" variant="secondary" fullWidth>
                  See Bundle Options
                </Button>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <FAQ items={product.faq.map((f) => ({ question: f.question, answer: f.answer }))} />

      {/* Final CTA */}
      <FinalCTA />
    </>
  );
}
