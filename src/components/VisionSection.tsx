const VisionSection = () => {
  return (
    <section className="py-16 md:py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-normal text-foreground leading-tight mb-6">
              Our Vision
            </h2>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              The vision of Royal Global School is to be an institution of excellence, dedicated to nurturing responsible global leaders for the greater cause of mankind and a sustainable future. By providing a holistic education that emphasizes academic excellence, ethical values, and environmental stewardship, the school aims to cultivate individuals who are not only knowledgeable and skilled but also compassionate and socially responsible.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              Royal Global School aspires to empower students to make meaningful contributions to society and lead with integrity and purpose.
            </p>
          </div>
          
          {/* Right Image */}
          <div>
            <img 
              src="https://www.rgs.edu.in/wp-content/uploads/2024/06/exploral-rgslogo.png"
              alt="RGS Vision"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;