import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="https://res.cloudinary.com/dihcnrjri/video/upload/v1754217475/school_qq7a78.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-6 max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <div className="flex items-center gap-8 mb-8">
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-white">No1</div>
              <div className="text-sm text-white/80">School of NorthEast</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-white">1:12</div>
              <div className="text-sm text-white/80">Teacher-student ratio</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-white">20+</div>
              <div className="text-sm text-white/80">Sports</div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-normal text-white leading-tight mb-6">
            ROYAL GLOBAL<br />
            SCHOOL
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-lg">
            With Infinite Possibilities for inquisitive Minds
          </p>
          
          <div className="flex gap-4">
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-sm rounded-full px-8"
            >
              Enquire Now
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-sm rounded-full px-8"
            >
              Virtual Tour
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;