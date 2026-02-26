'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';

const navItems = [
  { label: 'Templates', href: '/products' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Why SheetCraft', href: '/about' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <nav
      className={`sticky top-0 z-50 bg-sc-bg transition-all duration-200 ${
        scrolled ? 'h-14 border-b border-sc-border shadow-sm' : 'h-16'
      }`}
    >
      <Container className="flex h-full items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold text-sc-text tracking-tight"
        >
          <span className="inline-grid grid-cols-2 gap-[2px] w-5 h-5 rounded-[3px] bg-sc-blue/10 p-[3px]">
            <span className="bg-sc-blue rounded-[1px]" />
            <span className="bg-sc-blue/60 rounded-[1px]" />
            <span className="bg-sc-blue/60 rounded-[1px]" />
            <span className="bg-sc-blue rounded-[1px]" />
          </span>
          SheetCraft
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-sc-text-muted hover:text-sc-text transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Button
            href="/products"
            variant="primary"
            className="!py-2.5 !px-6 !text-sm !min-h-0"
          >
            Get Your Template
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 text-sc-text md:hidden relative z-50"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-sc-bg z-40 md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navItems.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                >
                  <Link
                    href={link.href}
                    className="text-2xl font-semibold text-sc-text hover:text-sc-blue transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Button
                  href="/products"
                  variant="primary"
                  onClick={() => setMobileOpen(false)}
                >
                  Get Your Template
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
