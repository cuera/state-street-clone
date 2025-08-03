import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import InteriorGallery from "@/components/InteriorGallery";
import LivingSection from "@/components/LivingSection";
import FloorPlansSection from "@/components/FloorPlansSection";
import CommunitySection from "@/components/CommunitySection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <IntroSection />
      <AmenitiesSection />
      <InteriorGallery />
      <LivingSection />
      <FloorPlansSection />
      <CommunitySection />
      <LocationSection />
      <Footer />
    </div>
  );
};

export default Index;
