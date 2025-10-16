import LogoLoop from "@/components/ui/LogoLoop";

const PartnersSection = () => {
  // Educational partner logos from local folder
  const partnerLogos = [
    {
      src: "/logo scroll/1.png",
      alt: "Educational Partner 1",
      title: "Educational Partner 1",
      kicker: "Education"
    },
    {
      src: "/logo scroll/2.png",
      alt: "Educational Partner 2",
      title: "Educational Partner 2",
      kicker: "Academic"
    },
    {
      src: "/logo scroll/3.png",
      alt: "Educational Partner 3",
      title: "Educational Partner 3",
      kicker: "Excellence"
    },
    {
      src: "/logo scroll/4.png",
      alt: "Educational Partner 4",
      title: "Educational Partner 4",
      kicker: "Innovation"
    },
    {
      src: "/logo scroll/5.png",
      alt: "Educational Partner 5",
      title: "Educational Partner 5",
      kicker: "Leadership"
    },
    {
      src: "/logo scroll/6.png",
      alt: "Educational Partner 6",
      title: "Educational Partner 6",
      kicker: "Global"
    },
    {
      src: "/logo scroll/7.png",
      alt: "Educational Partner 7",
      title: "Educational Partner 7",
      kicker: "Quality"
    },
    {
      src: "/logo scroll/8.png",
      alt: "Educational Partner 8",
      title: "Educational Partner 8",
      kicker: "Standards"
    },
    {
      src: "/logo scroll/9.png",
      alt: "Educational Partner 9",
      title: "Educational Partner 9",
      kicker: "Research"
    },
    {
      src: "/logo scroll/10.png",
      alt: "Educational Partner 10",
      title: "Educational Partner 10",
      kicker: "Growth"
    },
    {
      src: "/logo scroll/11.png",
      alt: "Educational Partner 11",
      title: "Educational Partner 11",
      kicker: "Future"
    },
    {
      src: "/logo scroll/12.png",
      alt: "Educational Partner 12",
      title: "Educational Partner 12",
      kicker: "Impact"
    }
  ];

  return (
    <section className="py-4 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* <div className="text-center mb-4">
          <h2 className="text-2xl md:text-3xl font-normal text-foreground mb-4">
            Awards & Accolades
          </h2>
          <h3 className="text-lg md:text-xl font-medium text-foreground mb-4">
            Excellence Recognized
          </h3>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            A testament to Royal Global School's unwavering dedication to fostering educational brilliance.
          </p>
        </div>
        
        <div className="relative" style={{ height: '80px' }}>
          <LogoLoop
            logos={partnerLogos}
            speed={60}
            direction="left"
            logoHeight={87}
            gap={60}
            pauseOnHover={true}
            scaleOnHover={true}
            fadeOut={true}
            fadeOutColor="#ffffff"
            ariaLabel="Educational partners and affiliations"
          />
        </div> */}
      </div>
    </section>
  );
};

export default PartnersSection;

