import { Hero } from '../components/Hero';
import { Stats } from '../components/Stats';
import { LogosCarousel } from '../components/LogosCarousel';
import { HomeAbout } from '../components/HomeAbout';
import { MissionVision } from '../components/MissionVision';
import { HomeServices } from '../components/HomeServices';
import { CallToAction } from '../components/CallToAction';
import { HomeGallery } from '../components/HomeGallery';
import { TestimonialsSection } from '../components/Testimonials';

export function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Stats />
      <HomeAbout />
      <MissionVision />
      <HomeServices />
      <CallToAction />
      <HomeGallery />
      <TestimonialsSection />
      <LogosCarousel />
    </div>
  );
}
