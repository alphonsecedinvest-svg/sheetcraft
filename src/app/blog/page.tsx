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
    <section className="py-12 lg:py-16 bg-sc-bg">
      <Container>
        <div className="text-center mb-10">
          <h1 className="font-bold text-[32px] leading-[40px] lg:text-[48px] lg:leading-[56px] tracking-[-0.05em] gradient-text">
            Blog
          </h1>
          <p className="mt-4 text-lg text-sc-text-muted max-w-xl mx-auto">
            Practical guides for construction professionals and real estate investors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-xl overflow-hidden flex flex-col bg-sc-card border border-sc-border shadow-card transition-all duration-200 hover:shadow-elevated hover:-translate-y-1"
            >
              {/* Hero image */}
              <div className="h-48 bg-sc-bg-alt relative overflow-hidden">
                {post.image ? (
                  <Image
                    src={post.image}
                    alt={post.imageAlt || post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full bg-sc-bg-alt">
                    <span className="text-3xl text-sc-text-muted/30">SC</span>
                  </div>
                )}
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-xs text-sc-text-muted mb-2">
                  <Clock size={14} />
                  {post.readTime} min read
                  <span className="text-sc-border">·</span>
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </div>
                <h2 className="font-semibold text-lg text-sc-text mb-2 leading-snug">
                  {post.title}
                </h2>
                <p className="text-sm text-sc-text-muted leading-relaxed flex-1">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex items-center gap-1 text-sc-blue text-sm font-medium group-hover:gap-2 transition-all">
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
