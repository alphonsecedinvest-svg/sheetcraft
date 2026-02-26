'use client';

import Container from '@/components/ui/Container';
import FadeIn from '@/components/ui/FadeIn';
import ProductCard from '@/components/products/ProductCard';
import Button from '@/components/ui/Button';
import { products } from '@/lib/products';

const contractorProducts = products.filter((p) => p.category === 'construction');
const investorProducts = products.filter((p) => p.category === 'real-estate');

export default function ProductShowcase() {
  return (
    <section className="py-16 lg:py-20 bg-sc-bg">
      <Container>
        <FadeIn>
          <h2 className="font-semibold text-2xl lg:text-[32px] lg:leading-[40px] tracking-[-0.02em] text-center mb-12 gradient-text">
            Proven templates for every stage of your project
          </h2>
        </FadeIn>

        {/* For Contractors */}
        <FadeIn delay={0.05}>
          <p className="text-sm font-semibold text-sc-blue uppercase tracking-wider mb-4">
            For Contractors
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {contractorProducts.map((product, i) => (
            <FadeIn key={product.slug} delay={i * 0.1 + 0.1}>
              <ProductCard product={product} />
            </FadeIn>
          ))}
        </div>

        {/* For Investors */}
        <FadeIn delay={0.15}>
          <p className="text-sm font-semibold text-sc-green uppercase tracking-wider mb-4">
            For Investors
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {investorProducts.map((product, i) => (
            <FadeIn key={product.slug} delay={i * 0.1 + 0.2}>
              <ProductCard
                product={product}
                featured={product.slug === 'rental-property-analyzer'}
              />
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.5}>
          <div className="mt-10 text-center">
            <Button href="/products" variant="ghost">
              Browse All Templates →
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
