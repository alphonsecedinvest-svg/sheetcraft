'use client';

import Container from '@/components/ui/Container';
import FadeIn from '@/components/ui/FadeIn';
import ProductCard from '@/components/products/ProductCard';
import Button from '@/components/ui/Button';
import { products } from '@/lib/products';

export default function ProductShowcase() {
  return (
    <section className="py-12 lg:py-16 bg-cloud">
      <Container>
        <FadeIn>
          <h2 className="font-heading font-semibold text-2xl lg:text-[32px] lg:leading-[40px] text-navy text-center mb-10">
            Proven templates for every stage of your project
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-4 lg:gap-6">
          {products.slice(0, 3).map((product, i) => (
            <FadeIn key={product.slug} delay={i * 0.1}>
              <ProductCard product={product} />
            </FadeIn>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-4 lg:gap-6 mt-4 lg:mt-6 max-w-2xl mx-auto lg:max-w-none lg:grid-cols-2">
          {products.slice(3).map((product, i) => (
            <FadeIn key={product.slug} delay={(i + 3) * 0.1}>
              <ProductCard product={product} />
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.5}>
          <div className="mt-8 text-center">
            <Button href="/products" variant="ghost">
              Browse All Templates →
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
