import Hero from '../../components/sections/Hero/Hero';
import TrustBar from '../../components/sections/TrustBar/TrustBar';
import ServicesPreview from '../../components/sections/ServicesPreview/ServicesPreview';
import Stats from '../../components/sections/Stats/Stats';
import FeaturedProjects from '../../components/sections/FeaturedProjects/FeaturedProjects';
import Testimonials from '../../components/sections/Testimonials/Testimonials';
import CTA from '../../components/sections/CTA/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesPreview />
      <Stats />
      <FeaturedProjects />
      <Testimonials />
      <CTA />
    </>
  );
}