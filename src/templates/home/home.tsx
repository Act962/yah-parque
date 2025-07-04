import { AboutSection } from "./sections/about-section";
import { AttractionSection } from "./sections/attractions-section";
import { HeroSection } from "./sections/hero-section";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <AttractionSection />
    </>
  );
}
