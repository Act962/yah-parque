import {
  AboutSection,
  AdvantagesSections,
  AttractionSection,
  BannerSection,
  FaqSection,
  FormSection,
  GalerySection,
  HeroSection,
} from "./sections";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <AttractionSection />
      <AdvantagesSections />
      <GalerySection />
      <BannerSection />
      <FaqSection />
      <FormSection />
    </>
  );
}
