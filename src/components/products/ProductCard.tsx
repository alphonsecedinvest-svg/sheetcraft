import Link from 'next/link';
import { Star } from 'lucide-react';
import Button from '@/components/ui/Button';
import MockupFrame from '@/components/ui/MockupFrame';
import type { Product } from '@/lib/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white border border-navy/8 rounded-xl shadow-card hover:shadow-elevated hover:-translate-y-[2px] transition-all duration-200 overflow-hidden flex flex-col">
      {/* Mockup image */}
      <Link href={`/products/${product.slug}`}>
        <MockupFrame className="!rounded-none !rounded-t-xl !shadow-none !border-0" />
      </Link>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        {/* Category badge */}
        <span className={`inline-block self-start px-3 py-1 rounded-full text-xs font-body font-medium ${
          product.category === 'construction'
            ? 'bg-green/10 text-green'
            : 'bg-amber/10 text-amber'
        }`}>
          {product.category === 'construction' ? '📊 Construction' : '🏠 Real Estate'}
        </span>

        {/* Title */}
        <Link href={`/products/${product.slug}`}>
          <h3 className="mt-2 font-heading font-semibold text-xl text-navy hover:text-amber transition-colors">
            {product.name}
          </h3>
        </Link>

        {/* Description */}
        <p className="mt-2 text-sm text-slate leading-relaxed flex-1">
          {product.shortDescription}
        </p>

        {/* Rating */}
        <div className="mt-3 flex items-center gap-1.5">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="fill-amber text-amber" />
            ))}
          </div>
          <span className="text-xs text-slate">({product.reviewCount})</span>
        </div>

        {/* Price */}
        <div className="mt-3">
          <span className="font-heading font-bold text-2xl text-navy">${product.price}</span>
        </div>

        {/* CTA */}
        <div className="mt-4">
          <Button href={`/products/${product.slug}`} fullWidth>
            Get This Template
          </Button>
        </div>
      </div>
    </div>
  );
}
