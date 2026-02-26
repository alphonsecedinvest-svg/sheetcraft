import Link from 'next/link';
import { Star } from 'lucide-react';
import Button from '@/components/ui/Button';
import MockupFrame from '@/components/ui/MockupFrame';
import type { Product } from '@/lib/products';
import { getProductImage } from '@/lib/products';

interface ProductCardProps {
  product: Product;
  featured?: boolean;
}

function getBadge(product: Product): { text: string; color: string } | null {
  if (product.slug === 'rental-property-analyzer')
    return { text: 'Most Popular', color: 'bg-sc-amber text-white' };
  if (product.slug === 'construction-budget-tracker')
    return { text: 'Best for Contractors', color: 'bg-sc-blue text-white' };
  return null;
}

function getCTA(product: Product): string {
  if (product.slug === 'rental-property-analyzer') return 'See the Analyzer';
  if (product.slug === 'construction-budget-tracker') return 'See the Tracker';
  if (product.slug === 'contractor-estimate-template') return 'See the Timeline';
  if (product.slug === 'flip-brrrr-calculator') return 'See the Calculator';
  return 'See the Analyzer';
}

export default function ProductCard({ product, featured }: ProductCardProps) {
  const badge = getBadge(product);

  return (
    <div
      className={`group relative rounded-xl overflow-hidden flex flex-col bg-sc-card border shadow-card transition-all duration-300 hover:shadow-[0_16px_40px_-8px_rgba(0,0,0,0.12)] hover:-translate-y-2 ${
        featured ? 'border-sc-amber border-2 lg:scale-[1.03]' : 'border-sc-border'
      }`}
    >
      {/* Badge */}
      {badge && (
        <div className={`absolute top-3 right-3 z-10 text-xs font-semibold px-3 py-1 rounded-full shadow-sm ${badge.color}`}>
          {badge.text}
        </div>
      )}

      {/* Mockup image */}
      <Link href={`/products/${product.slug}`} className="overflow-hidden">
        <MockupFrame
          className="!rounded-none !rounded-t-xl !shadow-none !border-0 transition-transform duration-300 group-hover:scale-[1.03]"
          imageSrc={getProductImage(product.slug)}
          imageAlt={`${product.name} template preview`}
        />
      </Link>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        {/* Category pill */}
        <span className={`inline-block self-start px-3 py-1 rounded-full text-xs font-medium ${
          product.category === 'construction'
            ? 'bg-sc-blue/10 text-sc-blue'
            : 'bg-sc-green/10 text-sc-green'
        }`}>
          {product.category === 'construction' ? 'CONSTRUCTION' : 'REAL ESTATE'}
        </span>

        {/* Title */}
        <Link href={`/products/${product.slug}`}>
          <h3 className="mt-2 font-semibold text-lg text-sc-text hover:text-sc-blue transition-colors">
            {product.name}
          </h3>
        </Link>

        {/* Description */}
        <p className="mt-2 text-sm text-sc-text-muted leading-relaxed flex-1">
          {product.shortDescription}
        </p>

        {/* Rating */}
        <div className="mt-3 flex items-center gap-1.5">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="fill-sc-amber text-sc-amber" />
            ))}
          </div>
          <span className="text-xs text-sc-text-muted font-medium">{product.rating}</span>
          <span className="text-xs text-sc-text-muted">({product.reviewCount})</span>
        </div>

        {/* Price */}
        <div className="mt-3">
          <span className="font-bold text-2xl text-sc-text font-mono">${product.price}</span>
          <span className="ml-1.5 text-xs text-sc-text-muted">one-time</span>
        </div>

        {/* CTA */}
        <div className="mt-4">
          <Button href={`/products/${product.slug}`} fullWidth>
            {getCTA(product)} — ${product.price}
          </Button>
        </div>
      </div>
    </div>
  );
}
