import { Button } from "@/components/ui/button";

const IntroSection = () => {
  return (
    <section className="py-16 md:py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            In a tranquil enclave, the fusion of contemporary design and timeless principles creates an atmosphere that nurtures the spirit of perpetual discovery. Here, serenity takes on new dimensions. Our institution has earned its place among the finest by establishing an educational sanctuary where knowledge flourishes, and every experience paves the way for confident strides.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <span className="text-sm text-muted-foreground">Admission Open for 2025-26</span>
            <Button 
              variant="default"
              size="sm"
              className="rounded-full px-6"
            >
              Apply Now
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">No1</div>
            <div className="text-sm text-muted-foreground">School of NorthEast</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">1:12</div>
            <div className="text-sm text-muted-foreground">Teacher-student ratio</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">20+</div>
            <div className="text-sm text-muted-foreground">Sports</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">20</div>
            <div className="text-sm text-muted-foreground">Acres Area</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;