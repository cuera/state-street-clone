import { Button } from "@/components/ui/button";

const AmenitiesSection = () => {
  const amenities = [
    "24 Hour Attended Lobby",
    "Coffee Shop by Yafa",
    "Mail and Package Room",
    "Community Concierge",
    "Bike Room",
    "Laundry",
    "Pet Wash",
    "Bodega by TULU",
    "3,000 SF Gym",
    "Yoga Studio",
    "The Grow Room",
    "Ample Workspace",
    "Playspace",
    "Reservable Living Room, Kitchen and Terrace",
    "Reservable Screening Room",
    "42nd floor Rooftop Pool",
    "Reservable Cabanas with Grills",
    "Rooftop Lounge, Kitchen",
    "Rooftop Terrace with Grill"
  ];

  return (
    <section className="py-16 md:py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-normal text-foreground leading-tight mb-6">
              Designed for<br />
              livable communities
            </h2>
            
            <h3 className="text-lg font-medium text-foreground mb-6">
              Building Amenities
            </h3>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Spaces to get more done or to turn off completely. A pop up when you want to be out. 
              A view when you want to stay in. Considered details to make every moment better.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {amenities.map((amenity, index) => (
                <div key={index} className="text-sm text-muted-foreground">
                  {amenity}
                </div>
              ))}
            </div>
            
            <Button 
              variant="outline"
              size="sm"
              className="rounded-full px-6"
            >
              More Details
            </Button>
          </div>
          
          {/* Right Image */}
          <div className="lg:pl-8">
            <img 
              src="https://cdn.sanity.io/images/xem89js7/production/99c803b14710a536d28c0c697a5818ac61d83bff-6701x4349.jpg?w=800&q=75&auto=format"
              alt="Building amenities"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;