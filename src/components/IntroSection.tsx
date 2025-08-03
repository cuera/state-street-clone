import { Button } from "@/components/ui/button";

const IntroSection = () => {
  return (
    <section className="py-16 md:py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
          Built with good design, thoughtful amenities, and sustainable principles 
          that offer a more impactful way of living.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <span className="text-sm text-muted-foreground">Select units available</span>
          <Button 
            variant="default"
            size="sm"
            className="rounded-full px-6"
          >
            Schedule a Tour
          </Button>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;