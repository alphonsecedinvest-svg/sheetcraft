import Hero from '@/components/sections/Hero';
import PainPoints from '@/components/sections/PainPoints';
import MarketGap from '@/components/sections/MarketGap';
import ProductShowcase from '@/components/sections/ProductShowcase';
import Features from '@/components/sections/Features';
import Testimonials from '@/components/sections/Testimonials';
import HowItWorks from '@/components/sections/HowItWorks';
import Pricing from '@/components/sections/Pricing';
import FAQ from '@/components/sections/FAQ';
import FinalCTA from '@/components/sections/FinalCTA';
import StickyMobileCTA from '@/components/ui/StickyMobileCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <PainPoints />
      <MarketGap />
      <ProductShowcase />
      <Features />
      <Testimonials />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <StickyMobileCTA />
    </>
  );
}
