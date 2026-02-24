import Link from 'next/link';
import { Star } from 'lucide-react';
import Button from '@/components/ui/Button';
import MockupFrame from '@/components/ui/MockupFrame';
import type { Product } from '@/lib/products';
import { getProductImage } from '@/lib/products';

interface ProductCardProps {
  product: Product;
}

function getBadge(product: Product): string | null {
  if (product.slug === 'rental-property-analyzer') return '🔥 Most Popular';
  if (product.slug === 'construction-budget-tracker') return '⭐ Best for Contractors';
  return null;
}

export default function ProductCard({ product }: ProductCardProps) {
  const badge = getBadge(product);

  return (
    <div className="relative glass-card rounded-xl overflow-hidden flex flex-col bg-white/[0.03] border border-white/10">
      {/* Badge */}
      {badge && (
        <div className="absolute top-3 right-3 z-10 bg-white text-black text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
          {badge}
        </div>
      )}

      {/* Mockup image */}
      <Link href={`/products/${product.slug}`}>
        <MockupFrame
          className="!rounded-none !rounded-t-xl !shadow-none !border-0"
          imageSrc={getProductImage(product.slug)}
          imageAlt={`${product.name} template preview`}
        />
      </Link>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        {/* Category badge */}
        <span className={`inline-block self-start px-3 py-1 rounded-full text-xs font-medium ${
          product.category === 'construction'
            ? 'bg-sc-green/10 text-sc-green'
            : 'bg-sc-amber/10 text-sc-amber'
        }`}>
          {product.category === 'construction' ? '📊 Construction' : '🏠 Real Estate'}
        </span>

        {/* Title */}
        <Link href={`/products/${product.slug}`}>
          <h3 className="mt-2 font-semibold text-xl text-white hover:text-sc-text-muted transition-colors">
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
          <span className="text-xs text-sc-text-muted">({product.reviewCount})</span>
        </div>

        {/* Price */}
        <div className="mt-3">
          <span className="font-bold text-2xl text-white font-mono">${product.price}</span>
        </div>

        {/* CTA */}
        <div className="mt-4">
          <Button href={`/products/${product.slug}`} fullWidth>
            See What&apos;s Inside — ${product.price}
          </Button>
        </div>
      </div>
    </div>
  );
}
