// Brand Colors
export const colors = {
  navy: '#1B2B4B',
  green: '#2A7D5F',
  amber: '#E8922F',
  amberHover: '#D4811F',
  slate: '#4A5568',
  cloud: '#F5F7FA',
  white: '#FFFFFF',
} as const;

// Site metadata
export const siteConfig = {
  name: 'SheetCraft',
  description: 'Professional Excel & Google Sheets templates built for construction and real estate pros.',
  url: 'https://sheetcraft.com',
  email: 'support@sheetcraft.com',
  ogImage: '/images/og-default.png',
} as const;

// Navigation links
export const navLinks = [
  { label: 'Templates', href: '/products' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
] as const;

// Trust logos (placeholder)
export const trustLogos = [
  'Turner Construction',
  'Keller Williams',
  'JE Dunn',
  'CBRE',
] as const;

// Stats
export const stats = [
  { value: '2,000+', label: 'templates sold' },
  { value: '$50M+', label: 'in projects tracked' },
  { value: '4.9★', label: 'average rating' },
] as const;
