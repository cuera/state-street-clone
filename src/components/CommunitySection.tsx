import { Button } from "@/components/ui/button";

const CommunitySection = () => {
  return (
    <section className="py-16 md:py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-normal text-foreground leading-tight mb-6">
              Better communities<br />
              start with better<br />
              buildings
            </h2>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We're connected to this neighborhood. Together, we're making it better for everyone who lives here.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <div className="text-2xl font-medium text-foreground mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Electric building</div>
              </div>
              <div>
                <div className="text-2xl font-medium text-foreground mb-2">42</div>
                <div className="text-sm text-muted-foreground">Floor rooftop</div>
              </div>
              <div>
                <div className="text-2xl font-medium text-foreground mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Residences</div>
              </div>
              <div>
                <div className="text-2xl font-medium text-foreground mb-2">3K SF</div>
                <div className="text-sm text-muted-foreground">Fitness center</div>
              </div>
            </div>
            
            <Button 
              variant="outline"
              size="sm"
              className="rounded-full px-6"
            >
              Learn More
            </Button>
          </div>
          
          {/* Right Images */}
          <div className="space-y-6">
            <img 
              src="https://cdn.sanity.io/images/xem89js7/production/cityscape-brooklyn-bridge-view.jpg?w=800&q=75&auto=format"
              alt="Brooklyn cityscape"
              className="w-full h-64 object-cover rounded-lg shadow-lg bg-gray-100"
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1543349689-9a4d426bee8e?w=800&q=75&auto=format';
              }}
            />
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://cdn.sanity.io/images/xem89js7/production/neighborhood-map.jpg?w=400&q=75&auto=format"
                alt="Neighborhood map"
                className="w-full h-32 object-cover rounded-lg shadow-md bg-gray-100"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=400&q=75&auto=format';
                }}
              />
              <img 
                src="https://cdn.sanity.io/images/xem89js7/production/local-coffee-shop.jpg?w=400&q=75&auto=format"
                alt="Local area"
                className="w-full h-32 object-cover rounded-lg shadow-md bg-gray-100"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&q=75&auto=format';
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;