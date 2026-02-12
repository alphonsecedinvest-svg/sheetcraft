import Hero from '@/components/sections/Hero';
import PainPoints from '@/components/sections/PainPoints';
import ProductShowcase from '@/components/sections/ProductShowcase';
import Features from '@/components/sections/Features';
import Testimonials from '@/components/sections/Testimonials';
import HowItWorks from '@/components/sections/HowItWorks';
import Pricing from '@/components/sections/Pricing';
import FAQ from '@/components/sections/FAQ';
import FinalCTA from '@/components/sections/FinalCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <PainPoints />
      <ProductShowcase />
      <Features />
      <Testimonials />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </>
  );
}
