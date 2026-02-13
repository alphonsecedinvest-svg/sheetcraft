'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks } from '@/lib/constants';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 h-16 border-b border-navy/8 bg-white/95 backdrop-blur-md">
      <Container className="flex h-full items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-heading text-xl font-bold text-navy tracking-tight">
          SheetCraft
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-sm font-medium text-slate hover:text-navy transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Button href="/products" variant="primary" className="!py-2.5 !px-5 !text-xs !min-h-0">
            Buy Now
          </Button>
        </div>

        {/* Mobile: CTA + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <Button href="/products" variant="primary" className="!py-2.5 !px-4 !text-xs !min-h-0">
            Buy Now
          </Button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-navy"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-navy/8 shadow-elevated z-50">
          <div className="flex flex-col py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-6 py-3 font-body text-base text-slate hover:text-navy hover:bg-cloud transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
