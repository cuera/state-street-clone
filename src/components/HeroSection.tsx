import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://cdn.sanity.io/images/xem89js7/production/fb66eccd39e4912232b6694ec7dd78772524bbad-2625x2083.jpg?w=1920&q=75&auto=format')`
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-6 max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-normal text-white leading-tight mb-6">
            New York's First<br />
            All-Electric Skyscraper
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-lg">
            Carbon Neutral Living, Without Compromise
          </p>
          
          <Button 
            variant="outline" 
            size="lg"
            className="bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-sm rounded-full px-8"
          >
            View Available Units
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;