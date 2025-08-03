const LivingSection = () => {
  return (
    <section className="py-16 md:py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div>
            <img 
              src="https://cdn.sanity.io/images/xem89js7/production/df0c427574f2f0912adc5b1a8b08e6e3c5d52b6f-6768x4512.jpg?w=800&q=75&auto=format"
              alt="New ways of living"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          
          {/* Right Content */}
          <div className="lg:pl-8">
            <h2 className="text-4xl md:text-5xl font-normal text-foreground leading-tight mb-6">
              New ways of living<br />
              happen from the inside
            </h2>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Change is happening for better living. What makes a great building isn't the address, 
              it's the people who call it home.
            </p>
            
            <div className="space-y-4 text-sm text-muted-foreground">
              <div>Starting at $2,800</div>
              <div>Studios & 1-4BR available</div>
              <div>Up to 3 months free*</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LivingSection;