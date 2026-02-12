'use client';

import Container from '@/components/ui/Container';
import FadeIn from '@/components/ui/FadeIn';
import ProductCard from '@/components/products/ProductCard';
import Button from '@/components/ui/Button';
import { products } from '@/lib/products';

export default function ProductShowcase() {
  const featured = products.slice(0, 3);

  return (
    <section className="py-12 lg:py-16 bg-cloud">
      <Container>
        <FadeIn>
          <h2 className="font-heading font-semibold text-2xl lg:text-[32px] lg:leading-[40px] text-navy text-center mb-10">
            Templates that work as hard as you do
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-4 lg:gap-6">
          {featured.map((product, i) => (
            <FadeIn key={product.slug} delay={i * 0.1}>
              <ProductCard product={product} />
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-8 text-center">
            <Button href="/products" variant="ghost">
              See All Templates →
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
