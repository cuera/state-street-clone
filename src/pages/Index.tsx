import StickyNavigation from "@/components/sticky-navigation";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import PartnersSection from "@/components/PartnersSection";
import SpotlightSection from "@/components/SpotlightSection";
import AppleCardsCarouselDemo from "@/components/apple-cards-carousel-demo";
import AmenitiesSection from "@/components/AmenitiesSection";
import AmenitiesSectionInverted from "@/components/AmenitiesSectionInverted";
import PlaceholderShowcase from "@/components/PlaceholderShowcase";
import Section505 from "@/components/Section505";
import { section505Demo } from "@/components/section505-demo-data";
import Footer from "@/components/Footer";
import { NavigationVisibilityProvider } from "@/hooks/use-navigation-visibility";
import LeadershipCarousel from "@/components/LeadershipCarousel";
import AcademicPathwaysSection from "@/components/AcademicPathwaysSection";
import EnrollwithRoyalGlobalSchool from "@/components/EnrollwithRoyalGlobalSchool";
import { LogoSpeedRGS } from "@/components/LogoSpeedRGS";
import VirtualTour from "@/components/VirtualTour";

const Index = () => {
  return (
    <NavigationVisibilityProvider>
      <div className="min-h-screen bg-background">
        <StickyNavigation />
        <div className="pt-28">
          <HeroSection />
        </div>
        <IntroSection />
        <AppleCardsCarouselDemo />
        <AmenitiesSection />
        <AmenitiesSectionInverted />
        <PlaceholderShowcase />
        <LeadershipCarousel />
        <Section505
          items={section505Demo}
          stickyTop="6rem"
          maxWidth={1280}
          heading={"Holistic, inquiry-driven\nlearning"}
        />
        <PartnersSection />
        <LogoSpeedRGS />
        <AcademicPathwaysSection />
        <EnrollwithRoyalGlobalSchool />
        <SpotlightSection />
        <VirtualTour />
        <Footer />
      </div>
    </NavigationVisibilityProvider>
  );
};

export default Index;
