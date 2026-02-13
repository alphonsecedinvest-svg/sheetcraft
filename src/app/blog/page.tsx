import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import { blogPosts } from '@/lib/blog';
import { Clock, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog — Guides for Construction & Real Estate Pros',
  description: 'Practical guides on construction budgeting, rental property analysis, BRRRR investing, and more. Written by industry professionals.',
};

export default function BlogPage() {
  return (
    <section className="py-12 lg:py-16 bg-cloud">
      <Container>
        <div className="text-center mb-10">
          <h1 className="font-heading font-bold text-[32px] leading-[40px] lg:text-[48px] lg:leading-[56px] text-navy">
            Blog
          </h1>
          <p className="mt-4 text-lg text-slate max-w-xl mx-auto">
            Practical guides for construction professionals and real estate investors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="bg-white border border-navy/8 rounded-xl shadow-card hover:shadow-elevated hover:-translate-y-[2px] transition-all duration-200 overflow-hidden flex flex-col"
            >
              {/* Hero image */}
              <div className="h-48 bg-navy/5 relative overflow-hidden">
                {post.image ? (
                  <Image
                    src={post.image}
                    alt={post.imageAlt || post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <span className="text-4xl">📊</span>
                  </div>
                )}
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-xs text-slate mb-2">
                  <Clock size={14} />
                  {post.readTime} min read
                  <span className="text-slate/30">·</span>
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </div>
                <h2 className="font-heading font-semibold text-lg text-navy mb-2 leading-snug">
                  {post.title}
                </h2>
                <p className="text-sm text-slate leading-relaxed flex-1">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex items-center gap-1 text-amber text-sm font-medium">
                  Read article <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
