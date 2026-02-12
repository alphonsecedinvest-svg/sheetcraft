import Link from 'next/link';
import Container from '@/components/ui/Container';
import { products } from '@/lib/products';

const footerLinks = {
  Products: products.map((p) => ({ label: p.name, href: `/products/${p.slug}` })),
  Resources: [
    { label: 'Blog', href: '/blog' },
    { label: 'Pricing', href: '/pricing' },
  ],
  Company: [
    { label: 'Contact', href: 'mailto:support@sheetcraft.com' },
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="font-heading text-xl font-bold text-white tracking-tight">
              SheetCraft
            </Link>
            <p className="mt-3 text-sm text-white/60 leading-relaxed">
              Professional Excel & Google Sheets templates for construction and real estate pros.
            </p>
            <p className="mt-4 text-sm text-white/60">
              support@sheetcraft.com
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-heading text-sm font-semibold text-white mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">© 2026 SheetCraft. All rights reserved.</p>
          <div className="flex gap-4 text-xs text-white/40">
            <Link href="#" className="hover:text-white/60 transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white/60 transition-colors">Terms</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
