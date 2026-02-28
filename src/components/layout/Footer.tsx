import Link from 'next/link';
import Container from '@/components/ui/Container';
import { products } from '@/lib/products';

const navLinks = [
  { label: 'Templates', href: '/products' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'FAQ', href: '/faq' },
];

const productLinks = products.map((p) => ({ label: p.name, href: `/products/${p.slug}` }));

export default function Footer() {
  return (
    <footer className="border-t border-sc-border bg-sc-bg">
      <Container>
        {/* Top row: brand + description + email */}
        <div className="py-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div>
            <Link href="/" className="text-lg font-bold text-sc-text tracking-tight">
              SheetCraft
            </Link>
            <p className="mt-1.5 text-sm text-sc-text-muted max-w-md">
              Professional Excel & Google Sheets templates for construction and real estate pros.
            </p>
          </div>
          <div className="text-sm text-sc-text-muted">
            <a
              href="mailto:support@sheetcraft.com"
              className="relative inline-block text-sc-text-muted hover:text-sc-text transition-colors group"
            >
              support@sheetcraft.com
              <span className="absolute left-0 bottom-0 w-0 h-px bg-sc-text transition-all duration-300 group-hover:w-full" />
            </a>
          </div>
        </div>

        {/* Bottom row: links + copyright */}
        <div className="border-t border-sc-border py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm text-sc-text-muted hover:text-sc-text transition-colors group"
              >
                {link.label}
                <span className="absolute left-0 bottom-0 w-0 h-px bg-sc-text transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            {productLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm text-sc-text-muted hover:text-sc-text transition-colors group hidden lg:inline"
              >
                {link.label}
                <span className="absolute left-0 bottom-0 w-0 h-px bg-sc-text transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4 text-xs text-sc-text-muted/60">
            <Link href="/privacy" className="hover:text-sc-text transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-sc-text transition-colors">Terms</Link>
            <Link href="/refund-policy" className="hover:text-sc-text transition-colors">Refunds</Link>
            <Link href="/imprint" className="hover:text-sc-text transition-colors">Imprint</Link>
            <span>© 2026 Cedinvest SA</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
