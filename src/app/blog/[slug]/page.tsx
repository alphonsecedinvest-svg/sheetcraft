import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogPosts, getBlogPostBySlug } from '@/lib/blog';
import { getProductBySlug } from '@/lib/products';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { Clock, ArrowLeft } from 'lucide-react';

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: 'article',
      publishedTime: post.publishedAt,
    },
  };
}

function renderMarkdown(content: string) {
  // Simple markdown-to-HTML for our blog content
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  let currentParagraph: string[] = [];
  let inTable = false;
  let tableRows: string[][] = [];
  let inList = false;
  let listItems: string[] = [];
  let listType: 'ul' | 'ol' = 'ul';

  const flushParagraph = () => {
    if (currentParagraph.length > 0) {
      const text = currentParagraph.join(' ');
      if (text.trim()) {
        elements.push(
          <p key={elements.length} dangerouslySetInnerHTML={{ __html: formatInline(text) }} />
        );
      }
      currentParagraph = [];
    }
  };

  const flushList = () => {
    if (listItems.length > 0) {
      const Tag = listType;
      elements.push(
        <Tag key={elements.length}>
          {listItems.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
          ))}
        </Tag>
      );
      listItems = [];
      inList = false;
    }
  };

  const flushTable = () => {
    if (tableRows.length > 0) {
      const header = tableRows[0];
      const body = tableRows.slice(1);
      elements.push(
        <table key={elements.length}>
          <thead>
            <tr>{header.map((cell, i) => <th key={i} dangerouslySetInnerHTML={{ __html: formatInline(cell) }} />)}</tr>
          </thead>
          <tbody>
            {body.map((row, i) => (
              <tr key={i}>{row.map((cell, j) => <td key={j} dangerouslySetInnerHTML={{ __html: formatInline(cell) }} />)}</tr>
            ))}
          </tbody>
        </table>
      );
      tableRows = [];
      inTable = false;
    }
  };

  const formatInline = (text: string): string => {
    return text
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      .replace(/`(.+?)`/g, '<code>$1</code>');
  };

  for (const line of lines) {
    const trimmed = line.trim();

    // Table row
    if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
      if (!inTable) {
        flushParagraph();
        flushList();
        inTable = true;
      }
      // Skip separator rows
      if (trimmed.match(/^\|[\s-|]+\|$/)) continue;
      const cells = trimmed.split('|').slice(1, -1).map((c) => c.trim());
      tableRows.push(cells);
      continue;
    } else if (inTable) {
      flushTable();
    }

    // Heading
    if (trimmed.startsWith('## ')) {
      flushParagraph();
      flushList();
      elements.push(
        <h2 key={elements.length}>{trimmed.slice(3)}</h2>
      );
      continue;
    }
    if (trimmed.startsWith('### ')) {
      flushParagraph();
      flushList();
      elements.push(
        <h3 key={elements.length}>{trimmed.slice(4)}</h3>
      );
      continue;
    }

    // List items
    if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      flushParagraph();
      if (!inList) {
        inList = true;
        listType = 'ul';
      }
      listItems.push(trimmed.slice(2));
      continue;
    }
    if (trimmed.match(/^\d+\.\s/)) {
      flushParagraph();
      if (!inList) {
        inList = true;
        listType = 'ol';
      }
      listItems.push(trimmed.replace(/^\d+\.\s/, ''));
      continue;
    }

    if (inList && trimmed === '') {
      flushList();
      continue;
    }

    // Empty line = paragraph break
    if (trimmed === '') {
      flushParagraph();
      continue;
    }

    currentParagraph.push(trimmed);
  }

  flushParagraph();
  flushList();
  flushTable();

  return elements;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) notFound();

  const relatedProduct = getProductBySlug(post.relatedProduct);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishedAt,
    author: { '@type': 'Organization', name: 'SheetCraft' },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="py-12 lg:py-16">
        <Container className="max-w-3xl">
          {/* Back link */}
          <Link href="/blog" className="inline-flex items-center gap-1 text-sm text-amber hover:text-amber-hover mb-6">
            <ArrowLeft size={14} /> Back to blog
          </Link>

          {/* Header */}
          <header className="mb-10">
            <h1 className="font-heading font-bold text-[28px] leading-[36px] lg:text-[40px] lg:leading-[48px] text-navy">
              {post.title}
            </h1>
            <div className="mt-4 flex items-center gap-3 text-sm text-slate">
              <Clock size={16} />
              {post.readTime} min read
              <span className="text-slate/30">·</span>
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </div>
          </header>

          {/* Content */}
          <div className="prose">
            {renderMarkdown(post.content)}
          </div>

          {/* Related product CTA */}
          {relatedProduct && (
            <div className="mt-12 bg-cloud border border-navy/8 rounded-xl p-6 lg:p-8">
              <p className="font-heading font-semibold text-xs text-amber uppercase tracking-wide mb-2">
                Related template
              </p>
              <h3 className="font-heading font-semibold text-xl text-navy mb-2">
                {relatedProduct.name}
              </h3>
              <p className="text-sm text-slate mb-4">
                {relatedProduct.shortDescription}
              </p>
              <Button href={`/products/${relatedProduct.slug}`}>
                Get the Template — ${relatedProduct.price}
              </Button>
            </div>
          )}
        </Container>
      </article>
    </>
  );
}
