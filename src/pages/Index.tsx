import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import SpotlightSection from "@/components/SpotlightSection";
import InteriorGallery from "@/components/InteriorGallery";
import VisionSection from "@/components/VisionSection";
import VideoSection from "@/components/VideoSection";
import LeadershipSection from "@/components/LeadershipSection";
import AwardsSection from "@/components/AwardsSection";
import NewsEventsSection from "@/components/NewsEventsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <IntroSection />
      <SpotlightSection />
      <InteriorGallery />
      <VisionSection />
      <VideoSection />
      <LeadershipSection />
      <AwardsSection />
      <NewsEventsSection />
      <Footer />
    </div>
  );
};

export default Index;
