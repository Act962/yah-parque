import { AboutSection } from "./sections/about-section";
import { AttractionSection } from "./sections/attractions-section";
import { FaqSection } from "./sections/faq-section";
import { HeroSection } from "./sections/hero-section";
import { TeamSection } from "./sections/team-section";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <AttractionSection />
      <TeamSection />
      <FaqSection />
    </>
  );
}
