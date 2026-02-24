'use client';

import { useState } from 'react';
import Container from '@/components/ui/Container';
import FadeIn from '@/components/ui/FadeIn';
import ProductCard from '@/components/products/ProductCard';
import { products } from '@/lib/products';

type Filter = 'all' | 'construction' | 'real-estate';

const filters: { label: string; value: Filter }[] = [
  { label: 'All Templates', value: 'all' },
  { label: 'Construction', value: 'construction' },
  { label: 'Real Estate', value: 'real-estate' },
];

export default function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState<Filter>('all');

  const filtered = activeFilter === 'all'
    ? products
    : products.filter((p) => p.category === activeFilter);

  return (
    <>
      <section className="py-12 lg:py-16 bg-sc-bg">
        <Container>
          <FadeIn>
            <div className="text-center mb-10">
              <h1 className="font-bold text-[32px] leading-[40px] lg:text-[48px] lg:leading-[56px] text-white tracking-[-0.05em] gradient-text">
                All Templates
              </h1>
              <p className="mt-4 text-lg text-sc-text-muted max-w-xl mx-auto">
                Professional spreadsheet templates for construction pros and real estate investors. From $29.
              </p>
            </div>
          </FadeIn>

          {/* Filters */}
          <FadeIn delay={0.1}>
            <div className="flex justify-center gap-2 mb-8">
              {filters.map((f) => (
                <button
                  key={f.value}
                  onClick={() => setActiveFilter(f.value)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                    activeFilter === f.value
                      ? 'bg-white text-black'
                      : 'bg-white/5 text-sc-text-muted hover:text-white border border-white/10'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-4 lg:gap-6">
            {filtered.map((product, i) => (
              <FadeIn key={product.slug} delay={i * 0.08}>
                <ProductCard product={product} />
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
