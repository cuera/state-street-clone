const LocationSection = () => {
  return (
    <section className="py-16 md:py-24 px-6 bg-muted">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-normal text-foreground leading-tight mb-6">
            A more beautiful, sustainable<br />
            and equitable Brooklyn
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our climate efforts on Fort Greene. What makes a great neighborhood? 
              We think it's people working together to make things better.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">
                  Fort Greene Park
                </h3>
                <p className="text-sm text-muted-foreground">
                  Historic 30-acre park with walking paths, playgrounds, and the Prison Ship Martyrs' Monument.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">
                  Brooklyn Academy of Music
                </h3>
                <p className="text-sm text-muted-foreground">
                  America's oldest performing arts academy, featuring theater, dance, music, and opera.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">
                  Dekalb Market Hall
                </h3>
                <p className="text-sm text-muted-foreground">
                  Food hall with 40+ vendors offering diverse cuisines from around the world.
                </p>
              </div>
            </div>
          </div>
          
          {/* Right Image */}
          <div>
            <img 
              src="https://images.unsplash.com/photo-1543349689-9a4d426bee8e?w=800&q=75&auto=format"
              alt="Brooklyn skyline view"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;