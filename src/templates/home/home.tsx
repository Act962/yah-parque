import { AboutSection } from "./sections/about-section";
import { AttractionSection } from "./sections/attractions-section";
import { BannerSection } from "./sections/banner-section";
import { FaqSection } from "./sections/faq-section";
import { FormSection } from "./sections/form-section";
import { GalerySection } from "./sections/galery-section";
import { HeroSection } from "./sections/hero-section";
import { TeamSection } from "./sections/team-section";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <AttractionSection />
      <TeamSection />
      <GalerySection />
      <BannerSection />
      <FaqSection />
      <FormSection />
    </>
  );
}
